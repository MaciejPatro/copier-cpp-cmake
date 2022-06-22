![copier-cpp-cmake](website/static/img/logo_2.svg)
# Welcome

**`copier-cpp-cmake`** is project template based on [copier tool](https://copier.readthedocs.io/en/stable/).

## Goals and philosophy

* The **main** goal of **this** project is to provide an easy way to start with development of your new `C++` project and focus on
the problem you want to solve instead of project structure/code formatting/basic `CI` and other common "quality of life"
issues. 
* The **secondary** goal is to make this project as **flexible** as reasonable. Allowing people to use different tools as they usually have different needs. Supporting them in updating of their projects when new tools are available or preferred after initial creation during development process.
* The **third** important aspect is to provide good `defaults` for each choice user can make (default to well established tools) so that less experienced users can use them as good starting point in their `C++` adventure.

What is **not** a goal of the project:
* Currently, it is not a goal to help you install/maintain all necessary tools on your machine. The project provides `docker` images for `CI/CD` which can be used during development - but taking care of having properly installed tools is your responsibility.

## Quick start

### What you'll need
- `Python` version `3.7` or newer.
- `copier` version `6.0.0` or newer and `copier-templates-extensions`.
- `cmake` with reasonably new version (`3.xx`)
- `conan` for providing dependencies (`vcpkg` to be supported in future)
- compiler of your choice
```bash
python3 -m pip install cmake copier copier-templates-extensions conan
```

### Create a project from template:

To start project generation simply use command:

```bash
copier https://github.com/MaciejPatro/copier-cpp-cmake/ .
```

### Update already generated project:

To update project use command:

```bash
copier update .
```

in your project directory.

## Future development

- `github-pages` introduced
- support for `vcpkg`
- support for `Windows` OS
- support for installation of exporting the software as packages (`deb`, `rpm`, `tgz`)
- support for `conan` package creation
- choice of providing own `namespace` for the project instead of defaulting to `project_slug`
- `ci/cd` improvements - deployment of tagged releases support
- `clang-tidy` support
- `clang-format` as part of CI (possibly)
- automated deployment of docker images provided in this repository
- periodic updates for supported standards/compiler versions
- many more
