/**
 * Contains sidebar definition for Porter's docs page.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually
  docs: [
    {
      type: "doc",
      id: "home-doc",
      className: "top-level-doc",
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/overview",
        "getting-started/linking-application-source",
        {
          type: "category",
          label: "Provisioning Infrastructure",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "getting-started/provisioning-infrastructure",
          },
          items: [
            "getting-started/provisioning-on-aws",
            "getting-started/provisioning-on-gcp",
            "getting-started/provisioning-on-do",
          ],
        },
        "getting-started/deploying-first-application",
        "getting-started/next-steps",
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "Deploying Applications",
      items: [
        "deploying-applications/overview",
        {
          type: "category",
          label: "Deploying from a Github Repository",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "deploying-applications/deploying-from-github",
          },
          items: [
            "deploying-applications/deploying-from-github/adding-updating-gh-app",
            "deploying-applications/deploying-from-github/selecting-application-and-build-method",
            "deploying-applications/deploying-from-github/customizing-github-workflow",
          ],
        },
        {
          type: "category",
          label: "Deploying from a Docker Registry",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "deploying-applications/deploying-from-docker-registry",
          },
          items: [
            "deploying-applications/deploying-from-docker-registry/linking-existing-registry",
          ],
        },
        {
          type: "category",
          label: "Deploying from the CLI",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "deploying-applications/deploying-from-cli",
          },
          items: [
            "deploying-applications/deploying-from-cli/creating-an-application",
            "deploying-applications/deploying-from-cli/updating-an-application",
            "deploying-applications/deploying-from-cli/additional-cli-commands",
          ],
        },
        "deploying-applications/using-other-ci-tools",
        {
          type: "category",
          label: "HTTPS and Domains",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "deploying-applications/https-and-domains",
          },
          items: [
            "deploying-applications/https-and-domains/ssl-certificates",
            "deploying-applications/https-and-domains/porter-domains",
            "deploying-applications/https-and-domains/custom-domains",
            "deploying-applications/https-and-domains/wildcard-domains",
          ],
        },
        "deploying-applications/zero-downtime-deployments",
        "deploying-applications/environment-groups",
        {
          type: "category",
          label: "Runtime Configuration Options",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "deploying-applications/runtime-configuration-options",
          },
          items: [
            "deploying-applications/runtime-configuration-options/web-applications",
            "deploying-applications/runtime-configuration-options/worker-applications",
          ],
        },
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "Managing Applications",
      items: [
        "managing-applications/overview",
        "managing-applications/viewing-application-metrics",
        "managing-applications/logging-options",
        "managing-applications/application-troubleshooting",
        "managing-applications/getting-shell-access",
        "managing-applications/version-updates",
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "Deploying Addons",
      items: [
        "deploying-addons/overview",
        {
          type: "category",
          label: "PostgreSQL",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "deploying-addons/postgresql",
          },
          items: [
            "deploying-addons/postgresql/deploying",
            "deploying-addons/postgresql/getting-shell-access",
          ],
        },
        {
          type: "category",
          label: "Redis",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "deploying-addons/redis",
          },
          items: [
            "deploying-addons/redis/deploying",
            "deploying-addons/redis/getting-shell-access",
            "deploying-addons/redis/exposing-redis-over-nginx",
          ],
        },
        {
          type: "category",
          label: "MongoDB",
          className: "expandable-subdoc",
          link: {
            type: "doc",
            id: "deploying-addons/mongodb",
          },
          items: [
            "deploying-addons/mongodb/deploying",
            "deploying-addons/mongodb/getting-shell-access",
          ],
        },
        "deploying-addons/tailscale",
        "deploying-addons/wallarm",
        "deploying-addons/datadog",
        "deploying-addons/strapi",
      ],
      collapsible: false,
    },
    {
      type: "category",
      label: "Running Jobs and Cron Jobs",
      items: ["running-jobs/overview"],
      collapsible: false,
    },
    {
      type: "category",
      label: "Alerting",
      items: ["alerting/slack-notifications"],
      collapsible: false,
    },
    {
      type: "category",
      label: "Preview Environments",
      items: ["preview-environments/overview"],
      collapsible: false,
    },
    {
      type: "category",
      label: "Other Guides",
      items: [
        "other/team-management-and-authorization",
        "other/kubernetes-101",
      ],
      collapsible: false,
    },
  ],
};

module.exports = sidebars;
