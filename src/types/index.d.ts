declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
declare module "react-tilt";
declare module "maath/random/dist/maath-random.esm";

interface ImportMeta {
  readonly env: {
    VITE_APP_EMAILJS_SERVICE_ID: string;
    VITE_APP_EMAILJS_TEMPLATE_ID: string;
    VITE_APP_EMAILJS_PUBLIC_KEY: string;
  };
}
