import { Suspense, useEffect, useState } from "react";
//@ts-ignore
import { Fade } from "react-reveal";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import { repoValues } from "../../typeconstants";
import Loading from "../loading/Loading";
import "./GithubProjects.scss"


export default function GithubProjects() {

  const [profileData, setProfileData] = useState<repoValues[]>([])

  useEffect(() => {
    fetch("profile.json").then(result => {
      if (result.ok) {
        return result.json();
      }
      throw result
    }).then(response => {
      setProfileData(response.data.user.pinnedItems.edges);
    })
  }, [])
  return(
    <Suspense fallback={Loading()}>
      <Fade bottom duration={1000} distance="20px">
      <div className="main" id="opensource">
        <h1 className="project-title">Open Source Projects</h1>
        <div className="repo-cards-div-main">
          {profileData.map((v: repoValues, i) => {
            return ( <GithubRepoCard node={v.node} key={v.node.id}/> );
          })}
        </div>
      </div>
      </Fade>
      </Suspense>
  )

}