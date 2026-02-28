import { client } from "./sanity";

export interface Profile {
    name: string;
    heroTitle: string;
    heroSubtitle: string;
    role: string;
    location: string;
    bio: any[];
    image: any;
    contacts: {
        title: string;
        link: string;
        type: "email" | "github" | "linkedin" | "cv";
    }[];
}

export interface Project {
    _id: string;
    title: string;
    subtitle: string;
    description: any[];
    img: any;
    alt: string;
    technologies: { name: string }[];
    link?: string;
    github?: string;
    mobile?: boolean;
    order?: number;
}

export interface Experience {
    _id: string;
    role: string;
    company: string;
    date: string;
    info: any[];
    active: boolean;
}

export interface Service {
    _id: string;
    title: string;
    description: string;
    iconIdentifier: string;
    order?: number;
}

export async function getProfile(lang = "es"): Promise<Profile | null> {
    return client.fetch<Profile | null>(
        `*[_type == "profile" && language == $lang][0]{
      name,
      heroTitle,
      heroSubtitle,
      role,
      location,
      bio,
      image,
      contacts
    }`,
        { lang }
    );
}

export async function getProjects(lang = "es"): Promise<Project[]> {
    return client.fetch<Project[]>(
        `*[_type == "project" && language == $lang] | order(order asc) {
      _id,
      title,
      subtitle,
      description,
      img,
      alt,
      "technologies": technologies[]->{name},
      link,
      github,
      mobile,
      order
    }`,
        { lang }
    );
}

export async function getExperiences(lang = "es"): Promise<Experience[]> {
    return client.fetch<Experience[]>(
        `*[_type == "experience" && language == $lang] | order(_createdAt desc) {
      _id,
      role,
      company,
      date,
      info,
      active
    }`,
        { lang }
    );
}

export async function getServices(lang = "es"): Promise<Service[]> {
    return client.fetch<Service[]>(
        `*[_type == "service" && language == $lang] | order(order asc) {
      _id,
      title,
      description,
      iconIdentifier,
      order
    }`,
        { lang }
    );
}
