// Importing NextAuth for implementing secure and scalable user authentication and session management.
import NextAuth from 'next-auth';

// Importing GoogleProvider and GithubProvider for OAuth authentication.
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

// Defining authentication options for NextAuth.
export const authOptions = {
    providers: [
        // Configuring GoogleProvider with client ID and secret from environment variables.
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
        // Configuring GithubProvider with client ID and secret from environment variables.
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || '',
            clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
        }),
    ],
    // Secret key for signing and encrypting JWT tokens.
    secret: process.env.SECRET,
}

// Exporting the default NextAuth configuration to handle authentication requests.
// This will be used in the pages/api/auth/[...nextauth].ts file.
export default NextAuth(authOptions);
