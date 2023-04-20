import BoxClinic from "@/template/clinic/box/BoxClinic";

interface IProps {
  children: React.ReactNode;
}

export default function ClinicLayout({
  children, // will be a page or nested layout
} : IProps) {
  return <BoxClinic>{children}</BoxClinic>;
}
