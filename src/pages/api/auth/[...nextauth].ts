import NextAuth from "next-auth";
import {MD5, AES} from "crypto-js";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@mail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const data = JSON.stringify({
          email: credentials?.email,
          password:credentials?.password,
        });

        console.log(data)
        const crypto = require('crypto');
        const key = crypto.randomBytes(16);
        const iv = crypto.randomBytes(16);
        console.log("key:" + key.toString('base64'))
        console.log("iv:" + iv.toString('base64'))
        // Crear instancia de cifrado
        const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);

        // Cifrar los datos
        let encryptedData = cipher.update(data, 'utf8', 'base64');
        encryptedData += cipher.final('base64');
        //const encryptedData = AES.encrypt(data, key,{iv}).toString();
        
        console.log(JSON.stringify({
          data: encryptedData.toString('base64'),
        }));
        
        const res = await fetch("http://localhost:8081/clinica/clinica/encriptar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: encryptedData.toString('base64'),
            key: key.toString('base64'),
            iv:iv.toString('base64')
          }),
        });

        console.log(res.status);
        const user = await res.json();

        if (user && res.ok) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/signout",
    error: "/auth/login",
  },
});
