Logos Storage is the storage layer in the Logos Stack. It is currently a filesharing application, but we plan to add more in the future. You can check out its roadmap at: https://roadmap.logos.co/storage/roadmap.

We want to put together a website for Logos Storage. The website should be statically generated with Astro Starlight.

## Content Structure

The website should have the following structure:

- Landing Page
  * Brief description of Logos Storage and link to download the UI app.
- Developer Resources
  - API reference:
    * API reference for the Logos Storage Module API, extracted from the Logos Storage Module interface (https://github.com/logos-co/logos-storage-module/blob/master/storage_module_interface.h);
    * reference for libstorage.
  - Tutorials:
    * The contents of the API tutorials (libstorage tutorial, logos storage module tutorial).

You can read more about Logos Storage in /home/giuliano/Work/Status/logos-docs/docs/storage. You should follow the references (HTTP links to READMEs and documents) provided in there to learn more.

## Website Appearance

The website should have a modern, clean design that reflects the Logos brand. The official Logos website is https://logos.co/. Have a look there for inspiration. The Logos logo (no pun intended) is a Lambda symbol.

API documentation should look like API documentation - function signatures should be clearly distinguishable in the theming with parameters and return values properly marked. Qt signals should also be indicated when present.

## Organization

The website should be organized in a way that is easy to navigate and provides clear information about Logos Storage. Make sure you group things together logically and provide clear navigation paths.

## Output

The output should be an Astro Starlight website in this directory that can be built and deployed to a static hosting service.