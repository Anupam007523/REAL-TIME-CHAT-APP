A minimal chat platform template. It uses Fresh + Supabase + twind + BroadcastChannel API on Deno Deploy.

To get started, setup your .env with Supabase and Github OAuth credentials:

cp .env.example .env
To setup a Github OAuth App

Go to https://github.com/settings/applications/new
Set Application name to Deploy Chat Example
Set Homepage URL to your Deno Deploy project URL. (eg: chat-app-example.deno.dev)
Set Authorization callback URL to http://chat-app-example.deno.dev or localhost for development.
Add Client ID and Client Secret in the .env file.
Create a Supabase project

Go to app.supabase.io
Click on "New Project".
Enter project details and wait for the database to launch.
Grab the URL and anon key and DB from and add them to the .env file.
and fire up the server:

deno task start
