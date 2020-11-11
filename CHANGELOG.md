# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2020-11-11

### Changed

- Export `node` resource type (0048d30c, @KovacZan)
- Remove bridgechains and businesses endpoints (cf204922, @KovacZan)
- Dotify query parameters before sending them (6ebbe3be, @faustbrian)

## [1.1.4] - 2020-06-12

### Changed

-   Export `Resource` class

### Changed

## [1.1.3] - 2020-03-12

### Changed

-   Simplify pagination with ApiResponse (therefore fixes rounds) (4b1ff6d, @Minigugus)
-   Switch from type to interface for better types preview in code editors (4b1ff6d, @Minigugus)

## [1.1.1] - 2020-03-21

### Fixed

-   Add and adjust various transaction typings (6096f3ba, @rigwild)

## [1.1.0] - 2020-03-20

### Added

-   Types for resource methods (721ff209, @rigwild)
-   Types for available resources (2bdf431e, @rigwild)
-   Types for API responses (97a0502f, @rigwild)

### Fixed

-   ky implementation (8206af1c, @alexbarnsley)
-   update dependency ky to ^0.18.0 (a9d8d48b, @renovate[bot])
-   update dependency ky to ^0.19.0 (88df2a04, @renovate[bot])

### Changed

-   use ky instead of got (ab1f6335, @alexbarnsley)
-   bump handlebars from 4.1.2 to 4.5.3 (cc9206e1, @dependabot[bot])
-   update dependency jest to v25 (585aa234, @renovate[bot])
-   update dependency cross-env to v7 (b126333e, @renovate[bot])
-   update dependency nock to v12 (c4c608e7, @renovate[bot])
-   update dependency codecov to v3.6.5 [security] (75082664, @renovate[bot])
-   update dependency ts-jest to v25 (795c733e, @renovate[bot])
-   update dependency @types/jest to v25 (e192a9f4, @renovate[bot])
-   update all dependencies (02f38b76, @faustbrian)
-   move bridgechains/{id} endpoint (9d15f8cc, @dated)
-   bump acorn from 6.0.2 to 6.4.1 (59b2d3aa, @dependabot[bot])
-   update dependencies (4efad41b, @faustbrian)

## [1.0.6] - 2020-01-11

### Changed

-   Replace `got` with `ky` integration ([#79]) and ([#82])

## [1.0.5] - 2019-11-11

### Added

-   Add `bridgechain` endpoints ([#70])
-   Add `business` endpoints ([#70])
-   Add `locks` endpoints ([#70])

## [1.0.2] - 2019-09-02

### Added

-   Crypto endpoint ([#54])

## [1.0.1] - 2019-07-06

### Added

-   Allow client configuration via `withOptions` ([#49])

## [1.0.0] - 2019-07-05

### Added

-   Implemented Connections

### Changed

-   Migrated to TypeScript

### Removed

-   Peer Logic
-   Webhook Integration

## [0.1.26] - 2019-07-04

### Changed

-   Replaced `axios` and `axios-mock-adapter` with `got` and `nock`

## [0.1.25] - 2019-06-12

### Changed

-   Update order of config endpoints for Wallet API

## [0.1.24] - 2019-05-30

### Fixed

-   Upgrade `axios` to 0.19 to avoid CVE-2019-10742 (http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-10742)

## [0.1.23] - 2019-05-09

### Fixed

-   V2 peers no longer provide "status" which breaks validation for peer objects

## [0.1.22] - 2019-05-09

### Fixed

-   Try all possible config endpoints during transition period

## [0.1.21] - 2019-05-08

### Fixed

-   Try both p2p and wallet api for config

### Added

-   Node fees endpoint

## [0.1.20] - 2019-01-28

### Fixed

-   Check status and version to find peers
-   Clone peer list as to not overwrite default network peers

## [0.1.19] - 2019-01-25

### Changed

-   Added transaction fees v2 endpoint

## [0.1.18] - 2019-01-22

### Changed

-   Allow https peer option when finding peers

## [0.1.17] - 2019-01-16

### Changed

-   Use standard API-Version header

## [0.1.16] - 2018-12-04

### Fixed

-   Update mainnet peer addresses to match Core

## [0.1.15] - 2018-12-04

### Fixed

-   Use API port for mainnet peers

## [0.1.14] - 2018-11-27

### Changed

-   Update mainnet peer list

## [0.1.13] - 2018-11-26

### Changed

-   Update mainnet peer list

## [0.1.12] - 2018-11-23

### Changed

-   Get peer list from 2 peers

## [0.1.11] - 2018-11-23

### Changed

-   Always send the `Content-Type` header

## [0.1.10] - 2018-10-24

### Fixed

-   Use the configured `core-api` port instead of the `core-p2p` port, which would fail (https://github.com/ArkEcosystem/core/pull/1138)
-   Wrong loader methods (https://github.com/ArkEcosystem/core/pull/1194)

## [0.1.9] - 2018-10-13

### Fixed

-   Handle v2 endpoints when finding peers (https://github.com/ArkEcosystem/core/pull/1103)

## [0.1.8] - 2018-10-12

### Changed

-   Use 5 second timeout for finding peers (https://github.com/ArkEcosystem/core/pull/1103)

### Fixed

-   Get peer response data correctly (https://github.com/ArkEcosystem/core/pull/1103)

## [0.1.7] - 2018-10-12

### Fixed

-   Add query parameters to the v2 endpoints.(https://github.com/ArkEcosystem/core/pull/1103)

## [0.1.6] - 2018-10-09

### Fixed

-   Use the definitive `accept` header instead of the previous one (https://github.com/ArkEcosystem/core/pull/1082)

## [0.1.5] - 2018-10-05

### Fixed

-   Use the `accept` header instead of api-version to avoid CORS problems (https://github.com/ArkEcosystem/core/pull/1012)

## [0.1.4] - 2018-09-20

### Fixed

-   Fix API client HTTP params (query string) (https://github.com/ArkEcosystem/core/pull/1015)

## [0.1.1] - 2018-06-14

### Added

-   initial release

[unreleased]: https://github.com/ARKEcosystem/core/compare/master...develop
[1.0.6]: https://github.com/ARKEcosystem/core/compare/1.0.5...1.0.6
[1.0.5]: https://github.com/ARKEcosystem/core/compare/1.0.2...1.0.5
[1.0.2]: https://github.com/ARKEcosystem/core/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/ARKEcosystem/core/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/ARKEcosystem/core/compare/0.1.26...1.0.0
[0.1.26]: https://github.com/ARKEcosystem/core/compare/0.1.25...0.1.26
[0.1.25]: https://github.com/ARKEcosystem/core/compare/0.1.24...0.1.25
[0.1.24]: https://github.com/ARKEcosystem/core/compare/0.1.23...0.1.24
[0.1.23]: https://github.com/ARKEcosystem/core/compare/0.1.22...0.1.23
[0.1.22]: https://github.com/ARKEcosystem/core/compare/0.1.21...0.1.22
[0.1.21]: https://github.com/ARKEcosystem/core/compare/0.1.20...0.1.21
[0.1.20]: https://github.com/ARKEcosystem/core/compare/0.1.19...0.1.20
[0.1.19]: https://github.com/ARKEcosystem/core/compare/0.1.18...0.1.19
[0.1.18]: https://github.com/ARKEcosystem/core/compare/0.1.17...0.1.18
[0.1.17]: https://github.com/ARKEcosystem/core/compare/0.1.16...0.1.17
[0.1.16]: https://github.com/ARKEcosystem/core/compare/0.1.15...0.1.16
[0.1.15]: https://github.com/ARKEcosystem/core/compare/0.1.14...0.1.15
[0.1.14]: https://github.com/ARKEcosystem/core/compare/0.1.13...0.1.14
[0.1.13]: https://github.com/ARKEcosystem/core/compare/0.1.12...0.1.13
[0.1.12]: https://github.com/ARKEcosystem/core/compare/0.1.11...0.1.12
[0.1.11]: https://github.com/ARKEcosystem/core/compare/0.1.10...0.1.11
[0.1.10]: https://github.com/ARKEcosystem/core/compare/0.1.9...0.1.10
[0.1.9]: https://github.com/ARKEcosystem/core/compare/0.1.8...0.1.9
[0.1.8]: https://github.com/ARKEcosystem/core/compare/0.1.7...0.1.8
[0.1.7]: https://github.com/ARKEcosystem/core/compare/0.1.6...0.1.7
[0.1.6]: https://github.com/ARKEcosystem/core/compare/0.1.5...0.1.6
[0.1.5]: https://github.com/ARKEcosystem/core/compare/0.1.4...0.1.5
[0.1.4]: https://github.com/ARKEcosystem/core/tree/0.1.4
[0.1.1]: https://github.com/ARKEcosystem/core/tree/0.1.1
[#49]: https://github.com/ArkEcosystem/typescript-client/pull/49
[#54]: https://github.com/ArkEcosystem/typescript-client/pull/54
[#70]: https://github.com/ArkEcosystem/typescript-client/pull/70
[#79]: https://github.com/ArkEcosystem/typescript-client/pull/79
[#82]: https://github.com/ArkEcosystem/typescript-client/pull/82
