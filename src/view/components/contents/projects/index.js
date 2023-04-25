import { Container } from "../../styeles/container/style";
import { ImageContButton, ProjectButton, ProjectDesc } from "../../styeles/projectbutton/style";
// import { RiFlutterFill } from "react-icons/ri";
// import { FaAws, FaGithub } from "react-icons/fa";
// import { SiStrapi } from "react-icons/si";

const ContentProjects = ({ title, desc, href, wall, icon1, icon2, icon3, icon4 }) => {
    return (
        <>
            <ProjectButton>
                <a href={href} target="_blank">
                    <Container width="100%"> 
                        <Container className="contentProjects" pad="0px 0px" height="200px" disp="flex" justify="space-between" aligh="center">

                            <Container height="100%" width="50%" disp="flex" justify="space-between" aligh="start" className="textProjects" overflow="hidden" direc="column" radius="0px 0px 0px 0px" pad="20px 20px 0px 20px">
                                <Container disp="flex" direc="column" justify="start" aligh="start" height="150px" overflow="hidden">
                                    <h5>
                                        {title}
                                    </h5>
                                    <p>
                                        {desc}
                                    </p>
                                </Container>
                                <Container disp="flex">
                                    <Container disp="flex" pad="0px 5px 0px 0px">
                                        {icon1}

                                    </Container>
                                    <Container disp="flex" pad="0px 5px">
                                        {icon2}

                                    </Container>
                                    <Container disp="flex" pad="0px 5px">
                                        {icon3}

                                    </Container>
                                    <Container disp="flex" pad="0px 5px">
                                        {icon4}

                                    </Container>
                                </Container>
                            </Container>

                            <Container height="100%" width="50%" disp="flex" justify="center" aligh="center" overflow="hidden" radius="0px 0px 0px 20px" className="imageProjects">
                                <ImageContButton width="100%" src={wall} />

                            </Container>
                        </Container>
                        <ProjectDesc className="ProjectDesc">
                            <Container color="transparent" width="100%" disp="flex" justify="center" aligh="center">
                                <h5>Git Hub</h5>

                            </Container>
                        </ProjectDesc>
                    </Container>

                </a>
            </ProjectButton>
        </>
    )

}

export default ContentProjects;