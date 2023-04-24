import NextAuth from "next-auth";
import * as crypto from 'crypto-js'
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
          password: credentials?.password.toString(),
        });

        console.log(data)
        const key = process.env.NEXT_PUBLIC_COMPANY_KEY || ''
        //const iv = crypto.randomBytes(16);
        console.log("key:" + Buffer.from(key, 'utf8').toString('base64'))
        //console.log("iv:" + iv.toString('base64'))
        
        // Crear instancia de cifrado
        // const cipher = crypto.createCipheriv('AES-128-CBC', key, iv)

        // // Cifrar los datos
        // let encryptedData = cipher.update(data, 'utf8', 'base64');
        // encryptedData += cipher.final('base64');
        
        // console.log("data:" + encryptedData)
        
        const res = await fetch("http://localhost:8081/login/auth/signIn", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: 'mkklmklmlm',
            key: Buffer.from(key, 'utf8').toString('base64'),
            iv: 'mwNiQrhx4O8PRdt1hS94jA=='
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
    signIn: "/auth/signIn",
    signOut: "/auth/signout",
    error: "/auth/signIn",
  },
});
