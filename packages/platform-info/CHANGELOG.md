# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.3.0](https://github.com/Alwatr/nanolib/compare/v5.2.1...v5.3.0) (2025-02-03)

### Miscellaneous Chores

* edit README ([3860b3d](https://github.com/Alwatr/nanolib/commit/3860b3df48ab82dc479d5236c2e8579df614aabf)) by @ArmanAsadian

### Dependencies update

* bump the development-dependencies group across 1 directory with 11 updates ([cb79d07](https://github.com/Alwatr/nanolib/commit/cb79d072a57c79e1c01abff1a293d6757bb65350)) by @dependabot[bot]
* update typescript and @types/node to version 5.7.3 and 22.13.0 respectively across multiple packages ([ddab05b](https://github.com/Alwatr/nanolib/commit/ddab05b5d767c30191f36a065e4bc88744e8e3fe)) by @alimd

## 5.0.0 (2024-11-02)

### ⚠ BREAKING CHANGES

* To simplify version management and ensure consistency, all nanolib packages now use the same version as @alwatr/nanolib. This may require updates to your project's dependencies.

### Features

* **platform-info:** Add isWebWorker property to platformInfo constant object ([ae3ca10](https://github.com/Alwatr/nanolib/commit/ae3ca1097eb9075eb4d730891e8d92768948f43d)) by @
* **platform-info:** new package for detect the current platform ([83f9534](https://github.com/Alwatr/nanolib/commit/83f95346bf0cf00402c6121bcbe4d231ff1739f1)) by @
* **platform-info:** support bun and isCli ([d693067](https://github.com/Alwatr/nanolib/commit/d693067b9d8de749d909600cfdc9587a7cd207f4)) by @
* use `package-tracer` ([cc3c5f9](https://github.com/Alwatr/nanolib/commit/cc3c5f9c1a3d03f0d81b46835665f16a0426fd0d)) by @

### Bug Fixes

* all dependeny topology ([1c17f34](https://github.com/Alwatr/nanolib/commit/1c17f349adf3e98e2a80ab2da4f0f81028dc9c5f)) by @
* **platform-info:** Update platformInfo logic and remove redundant code for prevent side-effects ([db46c48](https://github.com/Alwatr/nanolib/commit/db46c4844db360735271f0d4c0d6417207589aaf)) by @
* tsBuildInfoFile path in tsconfig.json files ([9c4ba01](https://github.com/Alwatr/nanolib/commit/9c4ba01afdd6657de4e5feef09bb6ee03d9ce053)) by @
* update to latest nano-build with preset ([a4d3c35](https://github.com/Alwatr/nanolib/commit/a4d3c35f9d86521312bd16dd9853519f4ed2e0b4)) by @

### Code Refactoring

* **platform-info:** enhance type to prevent modification ([e62c0eb](https://github.com/Alwatr/nanolib/commit/e62c0eb14f6102efde4206f7ba72ecc5dc146ce2)) by @
* prevent side-effects ([01e00e1](https://github.com/Alwatr/nanolib/commit/01e00e191385cc92b28677df0c01a085916ae677)) by @
* use new type-helper global types and remove all import types ([08b5d08](https://github.com/Alwatr/nanolib/commit/08b5d08c03c7c315382337239de0426462f384b8)) by @
* use the same version as @alwatr/nanolib ([60eb860](https://github.com/Alwatr/nanolib/commit/60eb860a0e33dfffe2d1d95e63ce54c60876be06)) by @

### Miscellaneous Chores

* **deps-dev:** bump the development-dependencies group with 3 updates ([0e0ec0f](https://github.com/Alwatr/nanolib/commit/0e0ec0f7c66c849727563cabe0e88606aee49035)) by @
* **deps-dev:** bump the development-dependencies group with 3 updates ([e0cf373](https://github.com/Alwatr/nanolib/commit/e0cf373dbaef46318a3878f5e542e3e53ef65b22)) by @
* **deps:** update ([1a45030](https://github.com/Alwatr/nanolib/commit/1a450305440b710a300787d4ca24b1ed8c6a39d7)) by @
* **deps:** update ([8e70dff](https://github.com/Alwatr/nanolib/commit/8e70dffb1e751496ef2e72d6cffd685f1fea44e3)) by @
* **deps:** update ([f0b60d2](https://github.com/Alwatr/nanolib/commit/f0b60d24c9fae6190940baf95167a1175360d4b3)) by @
* include LICENSE and LEGAL files to publish ([09f366f](https://github.com/Alwatr/nanolib/commit/09f366f680bfa9fb26acb2cd1ccbc68c5a9e9ad8)) by @
* **platform-info:** change the license to AGPL-3.0 ([0ca6ad1](https://github.com/Alwatr/nanolib/commit/0ca6ad19a486e9bcfd3ddcaa5741fd5b2e0e4005)) by @
* rename logger env ([38443ad](https://github.com/Alwatr/nanolib/commit/38443ade4677e857b5ebd4be417f5f2eb1818c87)) by @
* Update build and lint scripts ([392d0b7](https://github.com/Alwatr/nanolib/commit/392d0b71f446bce336b0256119a80f07aff794ba)) by @
* update clean script to remove all .tsbuildinfo files ([91f1ff2](https://github.com/Alwatr/nanolib/commit/91f1ff20c964d5327879c267f530a131526544d8)) by @
* Update debug command in package.json ([be8403d](https://github.com/Alwatr/nanolib/commit/be8403dec754f2117259bb915b110ea386596401)) by @
* Update package.json exports for [@alwatr](https://github.com/alwatr) packages ([dacb362](https://github.com/Alwatr/nanolib/commit/dacb362b145e3c51b4aba00ff643687a3fac11d2)) by @

### Dependencies update

* bump @types/node ([3d80fed](https://github.com/Alwatr/nanolib/commit/3d80fedaf720af792feb060c2f81c737ebb84e11)) by @
* bump the development-dependencies group across 1 directory with 10 updates ([9ed98ff](https://github.com/Alwatr/nanolib/commit/9ed98ffd0668d5a36e255c82edab3af53bffda8f)) by @
* bump the development-dependencies group across 1 directory with 2 updates ([2dfda9e](https://github.com/Alwatr/nanolib/commit/2dfda9ec38a595f1fd961490d1a2fbf060f20a66)) by @
* bump the development-dependencies group with 10 updates ([fa4aaf0](https://github.com/Alwatr/nanolib/commit/fa4aaf04c907ecae06aa14000ce35216170c15ad)) by @
* bump the development-dependencies group with 2 updates ([be5d6c2](https://github.com/Alwatr/nanolib/commit/be5d6c2d86b937f32cebc6848aaff85af07055dd)) by @
* bump the development-dependencies group with 8 updates ([16847ac](https://github.com/Alwatr/nanolib/commit/16847acba91da027c422e3910d0f2dcc1f084e93)) by @
* upd ([451d025](https://github.com/Alwatr/nanolib/commit/451d0255ba96ed55f897a6f44f62cf4e6d2b12be)) by @
* update ([4434ba6](https://github.com/Alwatr/nanolib/commit/4434ba67c3f576bb1a0c307fbdb263c43cd9733a)) by @
* update ([c36ed50](https://github.com/Alwatr/nanolib/commit/c36ed50f68da2f5608ccd96119963a16cfacb4ce)) by @
* update all ([53342f6](https://github.com/Alwatr/nanolib/commit/53342f67a8a013127f073540bc11929f1813c05c)) by @
* update all dependencies ([1e0c30e](https://github.com/Alwatr/nanolib/commit/1e0c30e6a3a8e19deb5185814e24ab6c08dca573)) by @
* update all dependencies ([0e908b4](https://github.com/Alwatr/nanolib/commit/0e908b476a6b976ec2447f864c8cafcbb8a0f099)) by @
* upgrade ([6dbd300](https://github.com/Alwatr/nanolib/commit/6dbd300642c9bcc9e7d0b281e244bf1b06eb1c38)) by @

## [1.2.8](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.2.7...@alwatr/platform-info@1.2.8) (2024-11-02)

### Dependencies update

* update ([4434ba6](https://github.com/Alwatr/nanolib/commit/4434ba67c3f576bb1a0c307fbdb263c43cd9733a)) by @AliMD

## [1.2.7](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.2.6...@alwatr/platform-info@1.2.7) (2024-10-25)

### Dependencies update

* bump the development-dependencies group across 1 directory with 2 updates ([2dfda9e](https://github.com/Alwatr/nanolib/commit/2dfda9ec38a595f1fd961490d1a2fbf060f20a66)) by @dependabot[bot]
* bump the development-dependencies group with 8 updates ([16847ac](https://github.com/Alwatr/nanolib/commit/16847acba91da027c422e3910d0f2dcc1f084e93)) by @dependabot[bot]

## [1.2.6](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.2.5...@alwatr/platform-info@1.2.6) (2024-10-12)

**Note:** Version bump only for package @alwatr/platform-info

## [1.2.5](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.2.4...@alwatr/platform-info@1.2.5) (2024-10-11)

### Bug Fixes

- **platform-info:** Update platformInfo logic and remove redundant code for prevent side-effects ([db46c48](https://github.com/Alwatr/nanolib/commit/db46c4844db360735271f0d4c0d6417207589aaf)) by @AliMD

### Code Refactoring

- prevent side-effects ([01e00e1](https://github.com/Alwatr/nanolib/commit/01e00e191385cc92b28677df0c01a085916ae677)) by @mohammadhonarvar

## [1.2.4](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.2.3...@alwatr/platform-info@1.2.4) (2024-10-11)

### Miscellaneous Chores

- include LICENSE and LEGAL files to publish ([09f366f](https://github.com/Alwatr/nanolib/commit/09f366f680bfa9fb26acb2cd1ccbc68c5a9e9ad8)) by @AliMD

## [1.2.3](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.2.2...@alwatr/platform-info@1.2.3) (2024-10-11)

**Note:** Version bump only for package @alwatr/platform-info

## [1.2.2](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.2.1...@alwatr/platform-info@1.2.2) (2024-10-10)

### Dependencies update

- bump the development-dependencies group with 10 updates ([fa4aaf0](https://github.com/Alwatr/nanolib/commit/fa4aaf04c907ecae06aa14000ce35216170c15ad)) by @dependabot[bot]

## [1.2.1](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.2.0...@alwatr/platform-info@1.2.1) (2024-10-08)

**Note:** Version bump only for package @alwatr/platform-info

## [1.2.0](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.1.13...@alwatr/platform-info@1.2.0) (2024-09-29)

### Features

- use `package-tracer` ([cc3c5f9](https://github.com/Alwatr/nanolib/commit/cc3c5f9c1a3d03f0d81b46835665f16a0426fd0d)) by @mohammadhonarvar

### Bug Fixes

- all dependeny topology ([1c17f34](https://github.com/Alwatr/nanolib/commit/1c17f349adf3e98e2a80ab2da4f0f81028dc9c5f)) by @mohammadhonarvar

### Code Refactoring

- **platform-info:** enhance type to prevent modification ([e62c0eb](https://github.com/Alwatr/nanolib/commit/e62c0eb14f6102efde4206f7ba72ecc5dc146ce2)) by @AliMD
- use new type-helper global types and remove all import types ([08b5d08](https://github.com/Alwatr/nanolib/commit/08b5d08c03c7c315382337239de0426462f384b8)) by @AliMD

### Miscellaneous Chores

- **platform-info:** change the license to AGPL-3.0 ([0ca6ad1](https://github.com/Alwatr/nanolib/commit/0ca6ad19a486e9bcfd3ddcaa5741fd5b2e0e4005)) by @ArmanAsadian
- Update build and lint scripts ([392d0b7](https://github.com/Alwatr/nanolib/commit/392d0b71f446bce336b0256119a80f07aff794ba)) by @AliMD

### Dependencies update

- bump @types/node ([3d80fed](https://github.com/Alwatr/nanolib/commit/3d80fedaf720af792feb060c2f81c737ebb84e11)) by @dependabot[bot]

## [1.1.13](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.1.12...@alwatr/platform-info@1.1.13) (2024-09-21)

**Note:** Version bump only for package @alwatr/platform-info

## [1.1.12](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.1.11...@alwatr/platform-info@1.1.12) (2024-09-15)

### Dependencies update

- bump the development-dependencies group across 1 directory with 10 updates ([9ed98ff](https://github.com/Alwatr/nanolib/commit/9ed98ffd0668d5a36e255c82edab3af53bffda8f)) by @dependabot[bot]
- update ([c36ed50](https://github.com/Alwatr/nanolib/commit/c36ed50f68da2f5608ccd96119963a16cfacb4ce)) by @AliMD

## [1.1.11](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.1.10...@alwatr/platform-info@1.1.11) (2024-08-31)

### Miscellaneous Chores

- Update package.json exports for [@alwatr](https://github.com/alwatr) packages ([dacb362](https://github.com/Alwatr/nanolib/commit/dacb362b145e3c51b4aba00ff643687a3fac11d2)) by @

## [1.1.10](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.1.9...@alwatr/platform-info@1.1.10) (2024-08-31)

### Dependencies update

- update all dependencies ([1e0c30e](https://github.com/Alwatr/nanolib/commit/1e0c30e6a3a8e19deb5185814e24ab6c08dca573)) by @AliMD

## [1.1.9](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.1.8...@alwatr/platform-info@1.1.9) (2024-07-04)

### Dependencies update

- update all dependencies ([0e908b4](https://github.com/Alwatr/nanolib/commit/0e908b476a6b976ec2447f864c8cafcbb8a0f099)) by @

## [1.1.8](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.1.7...@alwatr/platform-info@1.1.8) (2024-05-12)

### Dependencies update

- upgrade ([6dbd300](https://github.com/Alwatr/nanolib/commit/6dbd300642c9bcc9e7d0b281e244bf1b06eb1c38)) by @AliMD

## [1.1.7](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.1.6...@alwatr/platform-info@1.1.7) (2024-04-25)

**Note:** Version bump only for package @alwatr/platform-info

## [1.1.6](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.1.5...@alwatr/platform-info@1.1.6) (2024-03-28)

**Note:** Version bump only for package @alwatr/platform-info

## [1.1.5](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.1.4...@alwatr/platform-info@1.1.5) (2024-01-31)

### Miscellaneous Chores

- **deps:** update ([1a45030](https://github.com/Alwatr/nanolib/commit/1a450305440b710a300787d4ca24b1ed8c6a39d7)) by @AliMD

## [1.1.4](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.1.3...@alwatr/platform-info@1.1.4) (2024-01-24)

**Note:** Version bump only for package @alwatr/platform-info

## [1.1.3](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.1.2...@alwatr/platform-info@1.1.3) (2024-01-20)

**Note:** Version bump only for package @alwatr/platform-info

## [1.1.2](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.1.1...@alwatr/platform-info@1.1.2) (2024-01-16)

**Note:** Version bump only for package @alwatr/platform-info

## [1.1.1](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.1.0...@alwatr/platform-info@1.1.1) (2024-01-08)

**Note:** Version bump only for package @alwatr/platform-info

# [1.1.0](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.0.7...@alwatr/platform-info@1.1.0) (2024-01-03)

### Features

- **platform-info:** support bun and isCli ([d693067](https://github.com/Alwatr/nanolib/commit/d693067b9d8de749d909600cfdc9587a7cd207f4)) by @njfamirm

## [1.0.7](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.0.6...@alwatr/platform-info@1.0.7) (2024-01-03)

**Note:** Version bump only for package @alwatr/platform-info

## [1.0.6](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.0.5...@alwatr/platform-info@1.0.6) (2023-12-26)

**Note:** Version bump only for package @alwatr/platform-info

## [1.0.5](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.0.4...@alwatr/platform-info@1.0.5) (2023-12-26)

**Note:** Version bump only for package @alwatr/platform-info

## [1.0.4](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.0.3...@alwatr/platform-info@1.0.4) (2023-12-23)

### Bug Fixes

- tsBuildInfoFile path in tsconfig.json files ([9c4ba01](https://github.com/Alwatr/nanolib/commit/9c4ba01afdd6657de4e5feef09bb6ee03d9ce053)) by @

## [1.0.3](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.0.2...@alwatr/platform-info@1.0.3) (2023-12-23)

**Note:** Version bump only for package @alwatr/platform-info

## [1.0.2](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.0.1...@alwatr/platform-info@1.0.2) (2023-12-23)

**Note:** Version bump only for package @alwatr/platform-info

## [1.0.1](https://github.com/Alwatr/nanolib/compare/@alwatr/platform-info@1.0.0...@alwatr/platform-info@1.0.1) (2023-12-23)

### Bug Fixes

- update to latest nano-build with preset ([a4d3c35](https://github.com/Alwatr/nanolib/commit/a4d3c35f9d86521312bd16dd9853519f4ed2e0b4)) by @

# 1.0.0 (2023-12-22)

### Features

- **platform-info:** Add isWebWorker property to platformInfo constant object ([ae3ca10](https://github.com/Alwatr/nanolib/commit/ae3ca1097eb9075eb4d730891e8d92768948f43d)) by @
- **platform-info:** new package for detect the current platform ([83f9534](https://github.com/Alwatr/nanolib/commit/83f95346bf0cf00402c6121bcbe4d231ff1739f1)) by @AliMD
