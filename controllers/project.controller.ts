import { Request, Response } from "express";
import Project from "../schemas/project.schema";

export namespace ProjectController {
  export const createproject = (req: Request, res: Response) => {
    console.log("test");
    res.send("Express + TypeScript Server 123456");
  };

  export const deleteproject = (req: Request, res: Response) => {
    console.log("test");
    res.send("Express + TypeScript Server 123456");
  };

  export const getProjectsByUserId = (req: Request, res: Response) => {
    console.log("test");
    res.send("Express + TypeScript Server 123456");
  };

  export const saveProject = (req: Request, res: Response) => {
    console.log("test");
    const { project, user } = req.body;
    Project.findOne({userId:user._id}).then((prj)=>{
      if(prj && prj?.projectId !== project.projectId && !user.paidUser){
        console.log("Users cannot save more than one project using free tier!")
        res.status(500).send("Users cannot save more than one project using free tier!")
      } else {
        Project.findOne({ projectId: project.projectId }).then((pr) => {
          if (pr) {
            Project.findOneAndUpdate(
              { projectId: project.projectId },
              { state: project },
              {
                new: true,
              }
            )
              .then((doc) => {
                res.send(doc);
              })
              .catch((err) => {
                res.send(err);
              });
          } else {
            const projectModel = new Project({
              userId: user._id,
              state: project,
              projectId: project.projectId,
            });
            projectModel
              .save()
              .then((doc) => {
                console.log(project);
                console.log(user);
                res.send(doc);
              })
              .catch((err) => {
                res.send(err);
              });
          }
        });
      }
    })
 
  };
}
