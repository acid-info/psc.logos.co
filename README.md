# Reference:

- Design: https://www.figma.com/design/PiRQ5CNDpfKNlqChXR92RY/Visual-Language?node-id=581-235&t=7wsIXBFEjbRDxdEi-0

## CI/CD

- [CI builds](https://ci.infra.status.im/job/website/job/psc.logos.co/) `master` and pushes to `deploy-master` branch, which is hosted at <https://psc.logos.co//>.
- [CI builds](https://ci.infra.status.im/job/website/job/dev-psc.logos.co/) `develop` and pushes to `deploy-develop` branch, which is hosted at <https://dev-psc.logos.co//>.

The hosting is done using [Caddy server with Git plugin for handling GitHub webhooks](https://github.com/status-im/infra-misc/blob/master/ansible/roles/caddy-git).

Information about deployed build can be also found in `/build.json` available on the website.
