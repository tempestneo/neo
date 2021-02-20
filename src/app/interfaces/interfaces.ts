export interface Profile {
  avatarUrl: string;
  backgroundUrl: string;
  name: string;
  jobTitle: string;
  avatar: File;
  background: File;

}
export interface About {
  heading: string;
  summery: string;
}

export interface Experience {
  company: string;
  startdate: string;
  enddate: string;
  position: string;
  summery: string;
  roles: Array<any>;
  tech: Array<any>;
  projects: Array<any>;
}

export interface Skill {
  name: string;
  strength: number;
}

export interface Project {
  projectName: string;
  images: any;
  image: string;
  thumb: string;
  summary: string;
  isPdf: boolean;
}

export interface Technology {
  tech: string;
  icon: string;
}

export interface Social {
  name: string;
  icon: string;
  url: string;
}

export interface Contact {
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
}
export interface Education {
  institution: string;
  certification: string;
  year: string;
}

export interface Service {
  icon: string;
  heading: string;
  summary: string;
}
export interface Portfolio {
  profile: Profile;
  about: About;
  services: Service[];
  experience: Experience[];
  skills: Skill[];
  project: Project[];
  contact: Contact;
  social: Social[];
  education: Education[];
}
