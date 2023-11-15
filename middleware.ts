// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   ignoredRoutes: ["/((?!api))(_next.*|.+.[w]+$)", "/api/webhook"],
// });

// export const config = {
//   matcher: ["/((?!api))(_next.*|.+.[w]+$)", "/api/webhook"],
// };

import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api)(.*)"],
};
