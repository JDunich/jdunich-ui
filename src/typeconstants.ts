export interface repoValues {
  node: {
    name: string,
    description: string,
    primaryLanguage: { 
      color: string,
      name: string,
     }
    url: string,
    id: string,
    forkCount: string,
    stargazers: { totalCount: string, }
    diskUsage: string,
  }
}

export interface buttonValues {
  text?: string,
  className?: string,
  href?: string,
  newTab?: boolean,
}

export interface educationValues {
  school: {

    schoolName: string, 
    logo: string,
    subHeader: string,
    descBullets: string[],
    duration: string,
    desc: string,
  }
}

export interface bulletValues {
  descBullets: string[] | null
}

export interface skillValues {
  skill: {
    logo: string,
    title: string,
  }
}

export interface experienceValues {
  cardInfo: {
    company: string,
    desc: string,
    date: string,
    companylogo: string,
    role: string,
    descBullets?: string[]
  }
}