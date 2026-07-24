export interface ProjectItem {
  id: string | number;
  title: string;
  desc?: string;
  image: string;
  url?: string;
}

export interface ProjectCategory {
  categoryName: string;
  subTitle: string;
  projects: ProjectItem[];
}

export interface FlowItem {
  id: number;
  title: string;
  desc: string;
  image: string;
}
