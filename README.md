# Kinde Org Error

This is a reproduction of an issue with "@kinde-oss/kinde-auth-nextjs@2.5.0" and "next@15.1.7".

## Steps to reproduce

1. Clone the repository
2. Run `pnpm install`
3. Run `pnpm run dev`
4. Login with a user that is part of an organization
5. Go to `http://localhost:3000/protected`
6. You'll notice the organization mentioned is "No organization", which means the organization is not being found using `getOrganization`.

![Organization not found](/src/images/image.png)


## Notes

- This issue happens with `@kinde-oss/kinde-auth-nextjs@2.5.0` and `next@15.1.7`, downgrading to `@kinde-oss/kinde-auth-nextjs@2.4.6` fixes the issue, so it's something to do with the new version.

