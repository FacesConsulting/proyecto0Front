import BoxClinic from "@/template/clinic/box/BoxClinic";

export default function ClinicLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode,
  }) {
    return (
      <BoxClinic>
        {children}
      </BoxClinic>
    );
  }