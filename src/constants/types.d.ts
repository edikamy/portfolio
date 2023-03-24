export interface INavLink {
  id: string;
  title: string;
}

export interface IService {
  title: string;
  icon: any;
}

export interface ITechnology {
  name: string;
  icon: any;
}

export interface IExperience {
  title: string;
  company_name: string;
  description: string;
  icon: any;
  iconBg: string;
  date: string;
  link: string;
  points: string[];
}

export interface ITestimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  link?: string;
}

export type IProjectTag = {
  name: string;
  color: string;
};

export interface IProject {
  name: string;
  description: string;
  tags: IProjectTag[];
  image: any;
  source_code_link: string;
}
