import { rest } from "msw";

const baseURL =  'https://djangoframework-api-7834ad396166.herokuapp.com/';


export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 3,
        username: "user",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 3,
        profile_image:
          "https://res.cloudinary.com/dzczpaptk/image/upload/v1/media/../default_profile_v2b30a",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];