'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".well-known/matrix/client": "f9aed460935e1a0dc199b6c1e5090d3c",
".well-known/matrix/server": "109ac6df65d51ebdb1d799b9ea2f8c46",
"sql-wasm.wasm": "51739179fd57f102da5297192df613e7",
"assets/assets/calibration/1000R2.wav": "53cbe5cfdbc7d18e711e7bc65aca3771",
"assets/assets/calibration/1000L2.wav.license": "d67d9f3c0a81357b9e42ac7021ab6bcf",
"assets/assets/calibration/1000R2.wav.license": "d67d9f3c0a81357b9e42ac7021ab6bcf",
"assets/assets/calibration/1000L2.wav": "4828d296d8994defc612958f2e6691c7",
"assets/assets/logos/idichotic.png": "f19cbbc7c4c515876c7baea6c2d680f2",
"assets/assets/logos/github.png": "5dff3cd71c914e14408ae778cb0528c1",
"assets/assets/logos/weblate.svg.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/logos/fmri.png~": "b776323716429a669a7ba78fc5cad291",
"assets/assets/logos/fmri.png.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/logos/github.png.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/logos/fmri.png": "2141a88cf6cf97f9772405a7ef7de02a",
"assets/assets/logos/mmiv.png.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/logos/idichotic.png.license": "d67d9f3c0a81357b9e42ac7021ab6bcf",
"assets/assets/logos/mmiv.png": "5cf865b0a618d89366cf3e2120711b59",
"assets/assets/logos/weblate.svg": "39d364dbd134844929ea10a2c598eaa9",
"assets/assets/logos/uib.png": "ab31705349850daeb97167c18b290d72",
"assets/assets/logos/uib.png.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/languages.txt": "e53b64edc41116db6d6a1723a590c6c5",
"assets/assets/video/NR.mp4": "25bec0a61641043f1cd9a5ef7e53612c",
"assets/assets/video/NLR.mp4": "ea243ffad70218fa50d727f13725bb64",
"assets/assets/video/NL.mp4.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/video/NR.mp4.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/video/NL.mp4": "25c89c83cc12e86f319c0db05a1361c5",
"assets/assets/video/NLR.mp4.license": "06ebe4ae387446de40c20fad8dc64b57",
"assets/assets/audio/eng/Ka-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ga-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ba-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Pa-Ga.wav": "d735fd37701c6c8f7d47e390038006dc",
"assets/assets/audio/eng/Ta-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Pa-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Pa-Ba.wav": "0d9e52490f202432c2b85d36d13bbb6f",
"assets/assets/audio/eng/Ka-Pa.wav": "92201496ed8f307e83c9ba9c1dc9401f",
"assets/assets/audio/eng/Ga-Ka.wav": "6e89744cbc15baa21b35cf6c6fc49d68",
"assets/assets/audio/eng/Da-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Pa-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ba-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Da-Ga.wav": "d5fb4763885ca71c95ea6243d0b90898",
"assets/assets/audio/eng/Ka-Da.wav": "1d519a48ae0f564d7ef2c7ff83f6596c",
"assets/assets/audio/eng/Ka-Ga.wav": "38cb5cf33f3e4778cae25823b58695bc",
"assets/assets/audio/eng/Ta-Ga.wav": "64738e2deba311558e41a19ee13c19fc",
"assets/assets/audio/eng/Ta-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ga-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Da-Pa.wav": "a91baae624b9463c6f4af3713f2121fc",
"assets/assets/audio/eng/Ka-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ka-Ba.wav": "edf7b12319057105669563ecfbc93907",
"assets/assets/audio/eng/Ba-Ba.wav": "5ee19ebfe3abf57b4ba25f21b5ef9f6a",
"assets/assets/audio/eng/Ga-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ga-Ta.wav": "84e9629ea86f5296feb8da9644b2eeab",
"assets/assets/audio/eng/Da-Ta.wav": "3d7b4d8cfc20335c7835ce165c816c71",
"assets/assets/audio/eng/Ta-Da.wav": "e2f1be83c514c60e787726d15d6b1877",
"assets/assets/audio/eng/Da-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Pa-Da.wav": "6e334de1e64263830dc64ef188b5e484",
"assets/assets/audio/eng/Ba-Ta.wav": "5021efa528bedd003215e6debb141e1f",
"assets/assets/audio/eng/Da-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Pa-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ta-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ta-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ka-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ka-Ka.wav": "9fef3bf56770ede849e33053554ac4a5",
"assets/assets/audio/eng/Da-Ka.wav": "ffc953054cf1854b5dff033b49afe237",
"assets/assets/audio/eng/Ga-Pa.wav": "b0056a69bb40bd7a6b16dee97ba9e46b",
"assets/assets/audio/eng/Pa-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ba-Pa.wav": "a742a4bef5c0f9e52c95c96460494461",
"assets/assets/audio/eng/Pa-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ga-Ba.wav": "d1755c8c360ee02dc4fe2c2e69da82a7",
"assets/assets/audio/eng/Ga-Da.wav": "2490f71075bd1a22a2d923a3452a38b3",
"assets/assets/audio/eng/Ga-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ba-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Da-Ba.wav": "53aaf66543194400e72410fe101c8f0c",
"assets/assets/audio/eng/Da-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Da-Da.wav": "89e2af97bd8ad37151977b7291313d4c",
"assets/assets/audio/eng/Ka-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ta-Pa.wav": "83511adf5c2b723b6eca1303419e288c",
"assets/assets/audio/eng/Ta-Ka.wav": "4a2e23a3dc305fd4a88095319f803ced",
"assets/assets/audio/eng/Ba-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ta-Ta.wav": "35f373770588e545811cb384818c86c6",
"assets/assets/audio/eng/Ka-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ba-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Pa-Ta.wav": "c99ebc92063b5b12f09540da73c9ad2f",
"assets/assets/audio/eng/Da-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ba-Ga.wav": "a827d5a0c0b7605b012510ac230ca677",
"assets/assets/audio/eng/Ga-Ga.wav": "fc9467598d6a0f4100e45ed08133846a",
"assets/assets/audio/eng/Ta-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Da-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Pa-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ka-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Pa-Ka.wav": "8cfd16e262480a065e7ff0b57c34d7dd",
"assets/assets/audio/eng/Ga-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ta-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ta-Ba.wav": "b5af8a176e8888fb599656929b9c65d4",
"assets/assets/audio/eng/Ka-Ta.wav": "cfcbd6e226de2ebf7e71318a3004dac9",
"assets/assets/audio/eng/Ba-Ka.wav": "0f2d2f7d6cdab003ee03c2ae47b24962",
"assets/assets/audio/eng/Pa-Pa.wav": "fe251b779e1329157986cf6765929981",
"assets/assets/audio/eng/Ba-Da.wav": "addad1aef67ea399f1ad33bccb8be13b",
"assets/assets/audio/eng/Ga-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/eng/Ba-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ka-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ga-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ba-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Pa-Ga.wav": "42d5ddba725c14ea4261a70585250fbf",
"assets/assets/audio/est/Ta-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Pa-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Pa-Ba.wav": "8373724bfb915ee9f7a18a5413388d5e",
"assets/assets/audio/est/Ka-Pa.wav": "c4cb206eab9aef7166f4d0e86820b661",
"assets/assets/audio/est/Ga-Ka.wav": "1afb8fd051101934908b20a88144f4a5",
"assets/assets/audio/est/Da-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Pa-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ba-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Da-Ga.wav": "3ea1d39c6678a5433c6d78ba0f04c796",
"assets/assets/audio/est/Ka-Da.wav": "3f247230e371170a58069d61ffb01db4",
"assets/assets/audio/est/Ka-Ga.wav": "753b8858ce802946480e195ba61ee5ba",
"assets/assets/audio/est/Ta-Ga.wav": "3ab9c12dd30bebb14129147b94c4e93e",
"assets/assets/audio/est/Ta-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ga-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Da-Pa.wav": "4c928219a5015fc4cb916828f3ffe856",
"assets/assets/audio/est/Ka-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ka-Ba.wav": "a0f9d68a6120094eee74d0dc89a0fd6b",
"assets/assets/audio/est/Ba-Ba.wav": "b343cf6e2c08062c2e595654a91f9102",
"assets/assets/audio/est/Ga-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ga-Ta.wav": "f0684b4a59df74f21b97ee7d33a95a66",
"assets/assets/audio/est/Da-Ta.wav": "16641c62d4656d325f612807bb5a3e55",
"assets/assets/audio/est/Ta-Da.wav": "3d36b44015853dbee17e548ffa6190ac",
"assets/assets/audio/est/Da-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Pa-Da.wav": "932e7f784b3d65949dc189a9bf8b9c6f",
"assets/assets/audio/est/Ba-Ta.wav": "3ff790f634085c97a9fb55623f6b1f4c",
"assets/assets/audio/est/Da-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Pa-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ta-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ta-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ka-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ka-Ka.wav": "44bded895b6eaefcd5394fc78f1d4697",
"assets/assets/audio/est/Da-Ka.wav": "f8e1cd0ba5090301c7c9404679d3abb2",
"assets/assets/audio/est/Ga-Pa.wav": "868c4c3b8454f595435fc2b63153cd14",
"assets/assets/audio/est/Pa-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ba-Pa.wav": "35ba3458dcf62e71495fb20e6916f2bd",
"assets/assets/audio/est/Pa-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ga-Ba.wav": "52a29407cbbc0115a764fe30b5b6a2eb",
"assets/assets/audio/est/Ga-Da.wav": "58e2532410974a8bbcabb84fa2f4c0e7",
"assets/assets/audio/est/Ga-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ba-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Da-Ba.wav": "84eabc5d3e1ef10beda356e310eee3f2",
"assets/assets/audio/est/Da-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Da-Da.wav": "ed2d68de5d0b578733279a76fd1ac10d",
"assets/assets/audio/est/Ka-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ta-Pa.wav": "ac2fbe314e67ff93f295f9862050af37",
"assets/assets/audio/est/Ta-Ka.wav": "0f0edc68645964dec3eb66854da4cdcf",
"assets/assets/audio/est/Ba-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ta-Ta.wav": "47aad70253411268e944438df24dbaaa",
"assets/assets/audio/est/Ka-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ba-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Pa-Ta.wav": "c3156d0fd2a6ff3d7f4909b357e51bac",
"assets/assets/audio/est/Da-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ba-Ga.wav": "008ef1dc63680d9d18443d4bdc5228b6",
"assets/assets/audio/est/Ga-Ga.wav": "8ba789316c93fb89aaf463d74f967190",
"assets/assets/audio/est/Ta-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Da-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Pa-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ka-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Pa-Ka.wav": "8965ba4538afb05b0b11a149b92f7d66",
"assets/assets/audio/est/Ga-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ta-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ta-Ba.wav": "baeb0f98393a2dd26ddcaf3708dcde13",
"assets/assets/audio/est/Ka-Ta.wav": "f6aa84ce19ee935b9c5db867a627433c",
"assets/assets/audio/est/Ba-Ka.wav": "791dde39f924f6d309d09b2186fd2785",
"assets/assets/audio/est/Pa-Pa.wav": "b8ced71e649adbb5c338b2c85364f939",
"assets/assets/audio/est/Ba-Da.wav": "41e7e379813191042c5ab6821e9f1083",
"assets/assets/audio/est/Ga-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/est/Ba-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ka-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ga-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ba-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Pa-Ga.wav": "f9cb23526d306d0fa72c0cd4eb4ae2da",
"assets/assets/audio/ger/Ta-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Pa-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Pa-Ba.wav": "a152f91d2253229dff7977ba7592c416",
"assets/assets/audio/ger/Ka-Pa.wav": "b2dde3ca3ef02bd9023fda1e55b169ea",
"assets/assets/audio/ger/Ga-Ka.wav": "c53c09da4c8f46a132eabc1f17d7510e",
"assets/assets/audio/ger/Da-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Pa-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ba-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Da-Ga.wav": "25f8075d3e5fdddfb00cea592c16c331",
"assets/assets/audio/ger/Ka-Da.wav": "20806edb748048c1a64548b193c53d3b",
"assets/assets/audio/ger/Ka-Ga.wav": "8c6f8c7284dac239543931e74d51c138",
"assets/assets/audio/ger/Ta-Ga.wav": "a8bb1d58a213b6cc89e0c35e1c8d1295",
"assets/assets/audio/ger/Ta-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ga-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Da-Pa.wav": "c21a7578ab564ded6b29b5337b95d387",
"assets/assets/audio/ger/Ka-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ka-Ba.wav": "6c023ef82ed3f0b651a48273c1420236",
"assets/assets/audio/ger/Ba-Ba.wav": "6187f02b0ecca08949034e1f1247c4c9",
"assets/assets/audio/ger/Ga-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ga-Ta.wav": "516fda109ae75975b688b968b14f53bd",
"assets/assets/audio/ger/Da-Ta.wav": "da64257edebfc3facaf2d38bef979485",
"assets/assets/audio/ger/Ta-Da.wav": "1fcca4384a7c6a984f490b89bfe50568",
"assets/assets/audio/ger/Da-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Pa-Da.wav": "6263f3772e829518f4ae011178f34b50",
"assets/assets/audio/ger/Ba-Ta.wav": "b8b2564eb161ee5fcfc8aa47df5f7ea0",
"assets/assets/audio/ger/Da-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Pa-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ta-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ta-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ka-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ka-Ka.wav": "23ca606a71ce1d84739ffe6972ed9720",
"assets/assets/audio/ger/Da-Ka.wav": "5d3e9b965e77ee0ba914b0e9c1e41c9d",
"assets/assets/audio/ger/Ga-Pa.wav": "14f92591c95b3efc183011d6e24acc79",
"assets/assets/audio/ger/Pa-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ba-Pa.wav": "aa290f9f9940d2f74d2a269c1ec98ea6",
"assets/assets/audio/ger/Pa-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ga-Ba.wav": "cb9581523d79ad41a46a84ba86d69666",
"assets/assets/audio/ger/Ga-Da.wav": "3566a119e32f83e854424ffd1216f6c1",
"assets/assets/audio/ger/Ga-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ba-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Da-Ba.wav": "a7c9e0fb254058327f86ed9da2674fa4",
"assets/assets/audio/ger/Da-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Da-Da.wav": "6d8fa39cd22b536c5f6af84db59dd0fb",
"assets/assets/audio/ger/Ka-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ta-Pa.wav": "47ca3954aed2be4001917ef03d90e127",
"assets/assets/audio/ger/Ta-Ka.wav": "261fb00ce81baa119228cdfc717b2041",
"assets/assets/audio/ger/Ba-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ta-Ta.wav": "1e1347a226cb0d8d03fe76aa85e677c2",
"assets/assets/audio/ger/Ka-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ba-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Pa-Ta.wav": "3948e2c42953745bfdd3bc44f2dc0624",
"assets/assets/audio/ger/Da-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ba-Ga.wav": "3a5a549f9bac9fcd3857ce875a95c465",
"assets/assets/audio/ger/Ga-Ga.wav": "3add44e5fcfd64b7aa5f0bb990d2cc16",
"assets/assets/audio/ger/Ta-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Da-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Pa-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ka-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Pa-Ka.wav": "89c3aff74ee1ccb01eb7f76b834b9d14",
"assets/assets/audio/ger/Ga-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ta-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ta-Ba.wav": "27b534942b197ce687adba6fa4ef4aec",
"assets/assets/audio/ger/Ka-Ta.wav": "d1290c3f805c36df3366b30e7463d9b3",
"assets/assets/audio/ger/Ba-Ka.wav": "fc1d9cd14e0baf888a5f5629526d3154",
"assets/assets/audio/ger/Pa-Pa.wav": "627800f0816e05bc2d68c03cb47676b2",
"assets/assets/audio/ger/Ba-Da.wav": "d46651ee8740d534aa52b4052b3fe95f",
"assets/assets/audio/ger/Ga-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/ger/Ba-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ka-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ga-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ba-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Pa-Ga.wav": "b0056a69bb40bd7a6b16dee97ba9e46b",
"assets/assets/audio/nor/Ta-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Pa-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Pa-Ba.wav": "a742a4bef5c0f9e52c95c96460494461",
"assets/assets/audio/nor/Ka-Pa.wav": "8cfd16e262480a065e7ff0b57c34d7dd",
"assets/assets/audio/nor/Ga-Ka.wav": "38cb5cf33f3e4778cae25823b58695bc",
"assets/assets/audio/nor/Da-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Pa-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ba-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Da-Ga.wav": "2490f71075bd1a22a2d923a3452a38b3",
"assets/assets/audio/nor/Ka-Da.wav": "ffc953054cf1854b5dff033b49afe237",
"assets/assets/audio/nor/Ka-Ga.wav": "6e89744cbc15baa21b35cf6c6fc49d68",
"assets/assets/audio/nor/Ta-Ga.wav": "84e9629ea86f5296feb8da9644b2eeab",
"assets/assets/audio/nor/Ta-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ga-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Da-Pa.wav": "6e334de1e64263830dc64ef188b5e484",
"assets/assets/audio/nor/Ka-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ka-Ba.wav": "0f2d2f7d6cdab003ee03c2ae47b24962",
"assets/assets/audio/nor/Ba-Ba.wav": "5ee19ebfe3abf57b4ba25f21b5ef9f6a",
"assets/assets/audio/nor/Ga-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ga-Ta.wav": "64738e2deba311558e41a19ee13c19fc",
"assets/assets/audio/nor/Da-Ta.wav": "e2f1be83c514c60e787726d15d6b1877",
"assets/assets/audio/nor/Ta-Da.wav": "3d7b4d8cfc20335c7835ce165c816c71",
"assets/assets/audio/nor/Da-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Pa-Da.wav": "a91baae624b9463c6f4af3713f2121fc",
"assets/assets/audio/nor/Ba-Ta.wav": "b5af8a176e8888fb599656929b9c65d4",
"assets/assets/audio/nor/Da-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Pa-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ta-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ta-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ka-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ka-Ka.wav": "9fef3bf56770ede849e33053554ac4a5",
"assets/assets/audio/nor/Da-Ka.wav": "1d519a48ae0f564d7ef2c7ff83f6596c",
"assets/assets/audio/nor/Ga-Pa.wav": "d735fd37701c6c8f7d47e390038006dc",
"assets/assets/audio/nor/Pa-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ba-Pa.wav": "0d9e52490f202432c2b85d36d13bbb6f",
"assets/assets/audio/nor/Pa-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ga-Ba.wav": "a827d5a0c0b7605b012510ac230ca677",
"assets/assets/audio/nor/Ga-Da.wav": "d5fb4763885ca71c95ea6243d0b90898",
"assets/assets/audio/nor/Ga-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ba-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Da-Ba.wav": "addad1aef67ea399f1ad33bccb8be13b",
"assets/assets/audio/nor/Da-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Da-Da.wav": "89e2af97bd8ad37151977b7291313d4c",
"assets/assets/audio/nor/Ka-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ta-Pa.wav": "c99ebc92063b5b12f09540da73c9ad2f",
"assets/assets/audio/nor/Ta-Ka.wav": "cfcbd6e226de2ebf7e71318a3004dac9",
"assets/assets/audio/nor/Ba-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ta-Ta.wav": "35f373770588e545811cb384818c86c6",
"assets/assets/audio/nor/Ka-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ba-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Pa-Ta.wav": "83511adf5c2b723b6eca1303419e288c",
"assets/assets/audio/nor/Da-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ba-Ga.wav": "d1755c8c360ee02dc4fe2c2e69da82a7",
"assets/assets/audio/nor/Ga-Ga.wav": "fc9467598d6a0f4100e45ed08133846a",
"assets/assets/audio/nor/Ta-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Da-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Pa-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ka-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Pa-Ka.wav": "92201496ed8f307e83c9ba9c1dc9401f",
"assets/assets/audio/nor/Ga-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ta-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ta-Ba.wav": "5021efa528bedd003215e6debb141e1f",
"assets/assets/audio/nor/Ka-Ta.wav": "4a2e23a3dc305fd4a88095319f803ced",
"assets/assets/audio/nor/Ba-Ka.wav": "edf7b12319057105669563ecfbc93907",
"assets/assets/audio/nor/Pa-Pa.wav": "fe251b779e1329157986cf6765929981",
"assets/assets/audio/nor/Ba-Da.wav": "53aaf66543194400e72410fe101c8f0c",
"assets/assets/audio/nor/Ga-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/nor/Ba-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ka-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ga-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ba-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Pa-Ga.wav": "8a7d4d949b88fdb1002fb14a3b2f0ab4",
"assets/assets/audio/fre/Ta-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Pa-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Pa-Ba.wav": "4c240672bfdc690dd3c3dae0e59952c9",
"assets/assets/audio/fre/Ka-Pa.wav": "169875d37c2b5e260270fa5866c09ac4",
"assets/assets/audio/fre/Ga-Ka.wav": "e303636a549b66fde9e43ffac6c776f3",
"assets/assets/audio/fre/Da-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Pa-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ba-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Da-Ga.wav": "0a6e5f2d5558e15ec40e4ee11e4bbb71",
"assets/assets/audio/fre/Ka-Da.wav": "253357ee84d8ec22e70aba9628f0d397",
"assets/assets/audio/fre/Ka-Ga.wav": "35af281742d4faf62b4c8a05f3822a4f",
"assets/assets/audio/fre/Ta-Ga.wav": "98f082e6fe67df383c1b91675246ce90",
"assets/assets/audio/fre/Ta-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ga-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Da-Pa.wav": "543d27b496596181e977d739f602bf20",
"assets/assets/audio/fre/Ka-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ka-Ba.wav": "45160b4b31550ed2de5fdc28bab6f0c5",
"assets/assets/audio/fre/Ba-Ba.wav": "e8764fe6c2251a16a6d1ad1bf2277887",
"assets/assets/audio/fre/Ga-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ga-Ta.wav": "5deeeb911d35be190ed8fb9680eb14cd",
"assets/assets/audio/fre/Da-Ta.wav": "171290bcb390b36e304d2bce403c5773",
"assets/assets/audio/fre/Ta-Da.wav": "5058d41cf04e922a2d3301102aeb7c0f",
"assets/assets/audio/fre/Da-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Pa-Da.wav": "bdd8f01768e1fe8e92eb31c9e344efee",
"assets/assets/audio/fre/Ba-Ta.wav": "35b1e0c290359807efcfbf195e91eb20",
"assets/assets/audio/fre/Da-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Pa-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ta-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ta-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ka-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ka-Ka.wav": "8b3202c4cea8a15ba31a3f501244ee5f",
"assets/assets/audio/fre/Da-Ka.wav": "1baffabed62d1ab29e488ab34144ecdb",
"assets/assets/audio/fre/Ga-Pa.wav": "402257059b9e7b393903516c1e56af18",
"assets/assets/audio/fre/Pa-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ba-Pa.wav": "97de74b77073255bb44171438a626e92",
"assets/assets/audio/fre/Pa-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ga-Ba.wav": "7b058702cd0bcc3f2021e728836569c7",
"assets/assets/audio/fre/Ga-Da.wav": "bfc1576453951c77703d4283d96d7a05",
"assets/assets/audio/fre/Ga-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ba-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Da-Ba.wav": "1af1f7680eaa895845ae815d9d694912",
"assets/assets/audio/fre/Da-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Da-Da.wav": "14b3d460c9a9914c14f0a4d54ff774fb",
"assets/assets/audio/fre/Ka-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ta-Pa.wav": "16ed388f03975c09de3a3d8f205934d5",
"assets/assets/audio/fre/Ta-Ka.wav": "cf19e8f76183a33209cae1f8a72db55f",
"assets/assets/audio/fre/Ba-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ta-Ta.wav": "8fb6a7d19f23ff9d813b0e4c727090b3",
"assets/assets/audio/fre/Ka-Ba.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ba-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Pa-Ta.wav": "32a13ad2d50d8f42b93a8296463953a8",
"assets/assets/audio/fre/Da-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ba-Ga.wav": "f758fa7f97ad8d442014bfb5538faba5",
"assets/assets/audio/fre/Ga-Ga.wav": "c592c551714d3449b10f2b7e97baf0e5",
"assets/assets/audio/fre/Ta-Ta.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Da-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Pa-Ga.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ka-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Pa-Ka.wav": "b684cf751dfc4d77d16a838e3e45ca30",
"assets/assets/audio/fre/Ga-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ta-Da.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ta-Ba.wav": "9317fb7994c1c2b32ed7bcd8760d7547",
"assets/assets/audio/fre/Ka-Ta.wav": "e6f3898e94ef433fa946f203a90d5c0a",
"assets/assets/audio/fre/Ba-Ka.wav": "8383e8a8a1a904ead8eecfde58bf8568",
"assets/assets/audio/fre/Pa-Pa.wav": "155b4b8bf7143bb1dbf3a17e43b65ea6",
"assets/assets/audio/fre/Ba-Da.wav": "25cd7669e9dae7d44d3f5062804902b5",
"assets/assets/audio/fre/Ga-Ka.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/assets/audio/fre/Ba-Pa.wav.license": "2f94779321e832ddfc8aa46e9090b5db",
"assets/AssetManifest.json": "0b21257b71375999d65febfddd07347c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_charts/google_fonts/Comforter-Regular.ttf": "cff123ea94f9032380183b8bbbf30ec1",
"assets/NOTICES": "ccdd7531219c46f7070098a5e48c285b",
"assets/FontManifest.json": "209e66e2f71c646cc7eb744ea1cea0dc",
"assets/fonts/MaterialIcons-Regular.otf": "615e3d507c012bc9aa4a01c0667ab29f",
"assets/AssetManifest.smcbin": "f6ff492319ab62d35c032c7223562f2d",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"favicon.png": "e004f5764ba15365950af21016c3c514",
"sql-wasm.js": "ae7f97c3e8695a30c1ecb294affa311b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-192.png": "3904184eea4b1968f3676eaf2e166618",
"icons/Icon-512.png": "d95d216cae81394dfbd5aa2f863ab10e",
"icons/Icon-maskable-512.png": "d95d216cae81394dfbd5aa2f863ab10e",
"icons/Icon-maskable-192.png": "3904184eea4b1968f3676eaf2e166618",
"CNAME": "07d66eb2ae77541e5c9554a2bce0525b",
"_redirects": "24451388c2fc69419fac47ca08311257",
"main.dart.js": "1ba779b6cd5ced99b047fe4c7909e285",
".git/FETCH_HEAD": "2d73ca41a37b7a382a128a1b5f79dc29",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/ORIG_HEAD": "e3b1c052998cc7c1aa4537dbc511f01d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/main": "f0b41dfed29d634a730cc66e1f558494",
".git/refs/remotes/origin/main": "f0b41dfed29d634a730cc66e1f558494",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/objects/27/ded9724a1fc508ff648d5290374a3b35f19838": "8ddef8dde8d48c64747288b4111eb606",
".git/objects/8d/5f5ccf7c8707a1cc73389d4e2e5d31bb8a5ddb": "8cc336ad5d0cc8037125d1bc393f2ce0",
".git/objects/a0/8870930c9b92cd95e6dd4651dd12ba7b1a7c07": "910cedfe1b56f8c62052d85717801f21",
".git/objects/a0/2a70d1d90fbdcee750436e0d033bac90a66411": "ec065d328abe0f4e6ac2439aaaa37c70",
".git/objects/a0/1c01f68d39a3585590bfafb92867cf729ec06b": "699b060e8d4194c06adf01d3e53c27e5",
".git/objects/f1/856ba4c6e6f984f6f987f74a6e3a57991798ed": "86d4ad5c82ca6e55f352b661a17acae9",
".git/objects/f1/5e52477364a16b3f849c3ff5b728f48b00336e": "781abc142eade5365055908b9abd60b6",
".git/objects/f1/886cec8f0add08f696ef7d851693ba1569fe97": "86e04edc578ad56d2e5b61adee44047e",
".git/objects/17/5c6bef3f5df6da52f957d4cc863c6864e17229": "a679473473231cd19f1739850b793d4b",
".git/objects/17/24026215e7b5a227e5234a0379bcada021cb9d": "998bf05e77d99e090acd0bc54b2b3439",
".git/objects/4d/d8f750060d94d19661d935895faacade950e18": "06bd59957de02d9f319ea748f6082d8f",
".git/objects/4d/db8914c5627e9b76f98e1060290f788e12a1bf": "371fcd7d09f49092148fae6782f0e994",
".git/objects/18/d293132081ffa34e0b17a91dc7e6b9c44b130c": "39658e31142b9663af44302c7d456664",
".git/objects/d1/87732aad2723dbb18c57df9cdb1503dd39004a": "badc736bfaf8fe46102c8dc70b3c63f2",
".git/objects/26/7b5feea1975afd4b7258a64b7952133a7314eb": "faeb32746e6f73716a345e19803b83c3",
".git/objects/de/d78f87963236df0ad43be8c333c4e0c05b67f1": "d1aec73fe85297cb930803aac0f4fe43",
".git/objects/72/bf35123cd082caba8ddcd0458074d3a0f6d09c": "21b6820db35dc4c68f862127197eadef",
".git/objects/41/fe2b760c000efd69bb8c5808258f7b9334d29d": "7fbd01d7f01661d12a52c31f8c5c0594",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/a8/348d9e322f10b5fca4a048b5027c20e79d40d6": "205fe924f4fc15b146e71b636b8a297c",
".git/objects/e0/9ef5eda3784b2e9d9b9d8b54dfd76d6d35f222": "46b3fa7d002d6820c7c346806d628aef",
".git/objects/e0/da60ba096433d9af1c7025d2ffb9c521f190ed": "7682c4a69ed4969a020dc1c71f17cd03",
".git/objects/e0/4532474601d11d4a09c25a3af0f76a677e75d0": "992bc231c48b31d34512826567ea40fb",
".git/objects/06/cd47f12c4de21cd806e8df784a885f5f6609bd": "889bdc0b011d4ac3a80a470e85315b79",
".git/objects/06/341b9dcc6e82e231814225cf76ed9f99faf3de": "b18e3d60c8ae8105868976f19f413df5",
".git/objects/ae/e65cadb9bac07bcaea043e9918de7a29c91177": "dd5d00a7515fb5688d9f5f1239970d50",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/a5/a1d60b78cf32d4bdceb3418991ba3d3a043787": "c3fb20985b5fd00a044d6d2411dff249",
".git/objects/a5/029f8b7a1c53471992e22956bac0268b511fbf": "8cd72bb3c0fce52a5f35903792926dc0",
".git/objects/aa/037e1d404a57248c1431e225a7c0a68c67f0fb": "fcc8f9915a0543636646deb0f9cc59a0",
".git/objects/aa/4d6384cb4012894376ea20674b82457ee4eb51": "5506207c6448f91c4fd25fc0761c6d7f",
".git/objects/75/3464d681eabda027c447161f977585accf47df": "653dd37b5f7d1be9ec073625912f8f7b",
".git/objects/98/8606877cd9dd7acc06e5360564dfa7878b1d73": "6d73cba458784bb4c48c5f6a80c9b65a",
".git/objects/1c/9631e225ae5ff4b6e2f30e880a1a0d82162108": "e02cd6f00a93d4fbc94156c6708595f0",
".git/objects/34/f156158815101a6da6795d8961417446674dc0": "88b614d556fd46cfe81b49ae8a14b2d0",
".git/objects/d8/c03ac7b79c3c1a435f019768b5ade3a363d779": "00a6c49b761d17728aa24c6bfd1301c1",
".git/objects/ee/607bd9183484fbedc5435f54b2fc11fb977348": "8506e065e80d7c87ad51b383ff516cad",
".git/objects/ee/0a4a7dea5836f9d8f941d31466ef53f15ca6fa": "99b98b8ebff31ff3eea415698f1dd299",
".git/objects/92/e5e161ae6329753aea60dcf9616d0799b6efcb": "11db801075c8d0e941c417be532a731d",
".git/objects/3b/a6e62d16fa83a5f8d8a335abe4242aab616f28": "7f71164bc8672abf87d4d8d44f2e732e",
".git/objects/3b/b47a69387ed0ea6025df6fcca1e41b77ea7ba3": "cdb03ec8ebafc4f3f7819db71d41a1cd",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/18af9907154517fe282e5c98e515163b54db03": "de86aee6739fa02b12ec6a931cf9ced5",
".git/objects/60/ef90f83d87351be7918333453838ab4ff7523e": "606c5d92881561615cd74fce63022cd9",
".git/objects/60/f9f6c8fc009914e68b2d8376cbe207e346e6db": "19e4fae0b98e208430a4d496ae0bcbf9",
".git/objects/1a/528936a2502ef4850a36a825f983424476c145": "43f61ff0f44ad2f79adba6914e8c3ed7",
".git/objects/a7/0ab953735ac3cec7cfbd0bde794fc5fc423148": "d31a16f597897ec89f065a1ef2594cb3",
".git/objects/a7/f9a305212dbf57c107837e631d38e4a512264f": "733901290bd6249d84f6f9957c89332a",
".git/objects/2f/d43a077b7820c4725fad3dec603509633c1e45": "ed35d9b7285ae4c617fa901174170d5b",
".git/objects/9f/01d5e21446ee2b8b5519517e89ef662e04c99c": "af05f51a422ba171f086420c493c6098",
".git/objects/9f/4574769c0b21ff361375a0408c8f3347add8f5": "bd4c79be96c9f1d939bd65fed6ed4df7",
".git/objects/9f/06742af53fd23236ba057610336999a072fdf1": "545d2fc37bee87dbe2c4a1fc41005619",
".git/objects/9f/14bd756b18ae29bf6c07188703962365a53a83": "afc977c4b57ae2080c2a1ff9b4578b3f",
".git/objects/44/e5e570fdc66b6c09216999a524dee4683dbb68": "50db50330cbe235931810a8a4e398f7e",
".git/objects/44/fb9c41aa783d2194c339b88da2d5735b21252e": "1365ec1a236c1519e4e495c10f4358df",
".git/objects/cc/1282db84b230a913239bcd0050f956f76fc16b": "9cc2c5502bc34373e6cb5821d2f3c095",
".git/objects/99/3ea1754fe03155c82547e1528bfc3ede97d89b": "d240c3a81322247ae07ea5a8beca9cc8",
".git/objects/49/44a85c2228efe186c65c26d00a89d352222dc0": "7ffad6e15cf03170f1d031f30776ed18",
".git/objects/49/acdaac74e0c6c3763ea6a0bc3bd7ce0847f622": "767e9ae3bcc46267ab6f0a6445e0e899",
".git/objects/62/4a352721305f6d2cd22efe19c5c8f6cc684c8e": "e56c58d8bcf4e242a5832775187bbe0f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/4d3dc10d21e0fff2f482210ed5baae70355ee8": "e703261eae047544ab5338e8263df1cb",
".git/objects/fe/fe78c63af1a58bf43d226bc123c89ea6af2341": "58700f791d20e809f935884fdc1cec4f",
".git/objects/bc/929671b0cec0e97cd3edf2d1eaac4ad51c0762": "52f08e7ededb4fd2ae57546866c4bdfb",
".git/objects/b1/0a1ac9b6d2901417f10c5120d39e408c91096c": "c38ad31eef9725716fb158424e6cc133",
".git/objects/b1/29d6a976ebe67a2e46ea90e12ea518fe8a778b": "9e7ad95d8b3778cc10e4be26468ad622",
".git/objects/36/e2306a3039e86adfc35a3c59177c5568382b7c": "15d5691b3a9ff1ff6a0d0e7b1fc1bf6f",
".git/objects/80/b9c3df6018e19c514588b1101f3df9bd284a0f": "e9fc3276df0cdb06a0ed0b0d552dd0bf",
".git/objects/80/e215b1d5b0ca29423d9ab7f1b5605fedf14e9b": "d3697a63614805cd91eedbdb273a874a",
".git/objects/b3/fecd27d1742e86189af72815ca49a4436b5fae": "e18961fa9b19f855a5f750bab1435891",
".git/objects/c1/9bf7a97a67f4ac4dff4362e95c79992e28e179": "b02ec4328edaa4627b5fefc7f5266de9",
".git/objects/45/b19977be292c5385fa0b2c782426fbf2924ac3": "aaa27df77c512f4feadda8c4975e2401",
".git/objects/45/2a1f288e7c0f9de3a4b0bdc555ae4852bb798a": "54d06da85709ab85106d1eabac8f499b",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/0b0b4a6f454ff8922545b5715846d77c934983": "bc669cbe2d121c622d2a50489c8f93f4",
".git/objects/94/294cf91294273dda4bdccb04855791713a1b2e": "efb7ae9ad59bf6b453668ed7763532d9",
".git/objects/3f/a0fc29724a33c6bf4f6d5a9b94e35fdb2f42cd": "cedb9eb90419b83dc825ccd86a1f0e65",
".git/objects/e5/da6231969878907bfc6e0e16f3f9c590ee4f09": "213ae342c5466561f414022668320e13",
".git/objects/ad/6e42b8f12d19d49eb859b23ac58c8a9b52b3f4": "2dd0aa7b4ec6f52a57bd267c2e2e2142",
".git/objects/ad/5690992dd3893e18fbb4c5cb23f08fe71b8a81": "1451db46f63ebffa69300cc462f8ecee",
".git/objects/ad/eaa65635962e071ecd4e0073d59faca2bfe3bb": "e8933acd8fad29c8b978ae260b131f49",
".git/objects/85/d37902e5559402c6b458ff9267b8aba5399e6e": "a1d77190e2ccdbe86d1c9279b79ebd39",
".git/objects/85/742b75693eebc1316b9d48153ac009d45c9afd": "935f064cb448453ee432b44b32e1d73c",
".git/objects/85/09360c4b3adb1efbba36db1d4255832c8960f2": "a50e97dd0a160adfa827d033f1a45e3b",
".git/objects/85/6b91b45e130ff02244e4ac9ed392283c3bc61d": "1df0ada7b9ab39836169fa8617c88e96",
".git/objects/85/888572e3c9f9d369db5921c17764a39f75104a": "a099df887ad5e5c8c82c175178ff0275",
".git/objects/59/e70df094f0d5605429113c578fea3608c74b4e": "063b48488252f3259d25f36623d41844",
".git/objects/93/3992c10495213c5086029adcddc60347006399": "4ed0938ae67e103685030318aac91743",
".git/objects/01/cf15599ca93a23ca572257938976a253cf8b40": "40dba217b12362f952008237cbff8ca9",
".git/objects/01/99acce4e1f13805c1f7bdda0373189fa9f5430": "e62760c6b85e4ab5451a3a48a30763f2",
".git/objects/ea/d8a82d675edf622bf62a90c3364962e1ffecad": "5189bb7b6a1f8388c67a4c39039a281f",
".git/objects/ea/3d8185fe57f53d8c0b76f7cb4ac2f74abbaf59": "67c266a5262f7f032d74aa270a9ba15b",
".git/objects/dd/e5d285646ca18a66927c36c943b618c1a01cef": "01570c30ed32869d4e5b85df09c65a1e",
".git/objects/dd/33dd4d1a5a05d72b51cf5b7fd591c66e601c02": "dd9acc87ed39a862872fb400a8bf9898",
".git/objects/d2/e5c2a22c8e6af480ea80845d5106535fe544be": "e62b490ef029ffebb6aa56f96e7a9d00",
".git/objects/d2/f658164d832963546eb870c997a11020d75459": "da746c373497cb0bfc53c853a1cc2956",
".git/objects/d2/1b195ef88e97b64f4d711aab3e4cf59cd89400": "c24e35a46507b39421db06ddc54ca990",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d5/cb1c807928f98a03c6e0c7af79ee2fa3a9739d": "0ac245ba3d186229dbba241c610570b1",
".git/objects/d5/2b65f858f69985e09f0a3c9993fdd2c7f5cf1e": "c27b304cf8bacafc117042e317b78aae",
".git/objects/f7/723706f096f621ef068b2cc29be8e13674a705": "889255c09a348d2e99f0f783fad815b7",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/97/e8831d79667e7e2cc46983f74c1766ff68251c": "0a8c2e31be47261fd54ddef4a36d62e5",
".git/objects/40/ab068b041abd92d776a2a61fbfb5bfdb865474": "f3ff98359e50d392c4b71d359e1dd7e8",
".git/objects/40/4892c556117087bc2905b8bbc27cac3097f89e": "52f6b86fb792a044de5cf2406944e83d",
".git/objects/d6/9402ec28325df2893314ac61d6c6a0c38519cb": "4d789d05aa19f338fa485553c035ff45",
".git/objects/1d/725885e20d72929086fe60b74a21e616fc57d5": "f7999bd84b31a0e85e15eb57278d4578",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/4bfb6925416bb98907c5483e6d6bbc494641fb": "df8a0ef0f8d1ef573792895d4fdbfe93",
".git/objects/d0/ed0286eaab2666810e25f71a86f2da13a163b0": "25ea26dec3fad14a23a8694dace28be3",
".git/objects/0c/7eb7da7a535b4d4eb4e8a2e81c9a8b2b0da8e0": "ca9d1201c17938f830f6374a79046090",
".git/objects/0b/79cd39c10d5f6509f8770d1527d528e1958382": "d6a81818b16e7101e80369be33749a33",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/9d/ac9075866a7f9bdbe4c35ef708ea524e1c3bc9": "1adf1adc09f077ce26c2f5128c39efa7",
".git/objects/9d/761b474dcbf17facfe40c952b12fc5a5a23410": "e5c97461525cf3767e7ff0d6f19f7d93",
".git/objects/c5/cbe7a7e3be84d0046430a9bcf2658ed8d1c4a6": "a7c37ac4a9c33ed02324550214aa71c0",
".git/objects/0f/9512971b0422e7251411b47d5b102abaed6f68": "a1ddce85cfe338943b868f5e9fc5a831",
".git/objects/65/b2d2ebb7daa622e5e3a72387576814f7a3f21a": "0b9ce2a68661e34f67817189e430abc2",
".git/objects/7a/b41ae3f8db011b2db50bb8256503e229c06697": "89fa5c50c5964196d912e77e049d9e88",
".git/objects/7a/1ecead002ef1c92ee57423987be21979d696e3": "8a6ea67bafa53a626f611ea7ad34c706",
".git/objects/c8/a5326b2e226ba5679bf17019df46a6089dced8": "7e94348e167741fb376b311cd429559e",
".git/objects/08/460e16e678e3b385baa02996535b7cf6fa6c3e": "2d44195b380702587dad0959e599ed15",
".git/objects/5a/eb046bb3db7c146358a6df80ed66d02581ecd7": "c0248561b7cef376e7b5fdd2f4e2f106",
".git/objects/5a/ddb5f33390eea14176a73d904733ab15c30ea6": "4af587d193dd961afc147fcaa874d907",
".git/objects/19/4dca895961c4b67954b9ff0fb78bf9a2ec6878": "6837f53f04d76a81fa2c69ef6d5092c8",
".git/objects/19/86f591e1ab1b95e3ff319101f8541873c21c20": "cde28b92d283de6a15d8df11e9785f2c",
".git/objects/df/8482a4f045e6e56a4d0fc1d2fef8e27053b369": "36d93dacfdbf1fb594fdbc920fc24772",
".git/objects/7c/5ef55dbdabb279567d5b8ea614d4b2cd8f367d": "7ce56eaaaba8fb06d109258feb5e18d6",
".git/objects/ff/05348fe2bcf6d916e0c2760c1ce0cd225b4875": "5b72ba2f2127b4f9b87ca1676c3ad773",
".git/objects/db/cb543f8e1f872ca7865c1bef8697911e8e78e4": "2ff816ac696dc3fd0164f3f789408b22",
".git/objects/db/b789b65b18bda7261bdc0e8389ad7a42a48ba4": "611656cc63357fabcab01efa775f5e94",
".git/objects/54/33bf2ae832354c3725f9e916a9c660bcb41d9f": "bf42e5bb1d87f7eb80569c89ecb08ca2",
".git/objects/54/a3ff559c5281aa683e4cb46fe0c2572d279d0e": "5868755d26f51f6949ade496fff4c409",
".git/objects/f5/a854563b685c2fd13adab697e29f7f89c528d7": "c23484c0f59ac4dabf31b1de00ecf8ca",
".git/objects/b8/011212e238acfd027bd7a8abb97011a15edd38": "c13e1c7e33ff5deed20a89c5536294bc",
".git/objects/58/4fd7b3d097953877f036728389b71493378949": "82407e69050cd7bdd99bec1996662f5f",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/5e/d090f690c401f0726ee4cea07f1402ed476b48": "b2ee56b814a3fb485d68e107376d445d",
".git/objects/5e/53f9f04dc1f6e47f98806b8d6b9eccdfaf102b": "b9b8b548497927ac9002945c46906783",
".git/objects/5e/61511ba2c46043b3a446a608b7f13d2fca9c42": "8f5303d51a86c2a9bdb398a17ff6ca77",
".git/objects/b9/a9de499eaf528abd09b93f0fbdd969793c7869": "532b6f2cb8e4e3f3a536c140af480019",
".git/objects/7f/219f5920548ec773ff9c2a1948feebc1b3f6fd": "2f609a8693737c0b261d0a394d052d96",
".git/objects/84/7c19c18fd4fc0c139018118011abd5132f53ed": "1855187286d029dfd4f8765fba4c3f9f",
".git/objects/cb/0df4fffd7359a77380eae6e3d25e06a699116c": "dbba21d7c2e15e642aba049451089acf",
".git/objects/cb/834cdb8b423d93fa50cc8c8307256172cc265d": "702ebe0edc6f941db0b17fd6737e70bb",
".git/objects/32/c14d54032058e05632675b82f374afff634364": "98da3a9512d0a79a60ba71cf6e18040e",
".git/objects/32/e05f6bf006357b435a3221a19c33a69075fe32": "696bf8ae7d35388c72d5c8e5671c400b",
".git/objects/6a/df9b31db8f2b779c58e227de6595e21de40ea4": "09dfb3249059d3bc5050bf25459f1f2e",
".git/objects/28/0b5c84ca6ad121a05d8486d92c8b84f997c53b": "c43709844f3618f7ca9e26f9e0112896",
".git/objects/28/43c21863105252644e2a403e35bbea52dc0cb0": "c3566b48d263ebe06f689b947c981ec9",
".git/objects/da/5a017d4098fba0b27779e56b32babe46077c4d": "ec7d970dbf4d4d7a76d6e72c1dab69d7",
".git/objects/da/c027dbfdbf01db042431f9272171942752a5e4": "645add4ff334ae38164dea3a251ff361",
".git/objects/66/0084d3d9478fb45584352f6f2b7b7aa9267550": "cd55f84fc3641181cb8f4a82387a9c9a",
".git/objects/a1/c2a151492db5721d35ea11828da8c43d5773d5": "151c37c0f8ae4f247af45ec56f62a938",
".git/objects/e2/a4bc326cbcde31947672df3e866ee429116a9b": "7607d495d45a1a04bfdfb831a9534556",
".git/objects/e2/f25d90b135fec83df707ea826157138a9a3336": "a67bcd85c04b439f0d3665de5d7259af",
".git/objects/2d/d7fca08217cec8c62384cd76ff52e9b24c9867": "0fc3ad9749140eef3163330efdf0a775",
".git/objects/2d/eee22519bf8405235d8229ea9740ebae015385": "1e2d3d17f8da61a86449b968c8f414f1",
".git/objects/e8/33e7ceeeec0a24c3bed69cb936bbecb91ce42a": "0eb974c1d0d7115e4dba4ed3e816c954",
".git/objects/6d/e02d046dd166625c378c83dbe81bfdefc06df2": "5322bc98de26eb925bbaabed68c3cacb",
".git/objects/6d/d20dbdef06869e53f28c678d7eaef70179ecc3": "df23037a7b21cdbb330dcc8e1ea39c5e",
".git/objects/5d/f5b0f9ee6f31d244fc1d7bd131c152f1b9d8f7": "ffc3593bec51ab56a9a39a0833905b8c",
".git/objects/5d/c363e53b3def2aca8e099b115bb51bf1634828": "2c543c7f7a85349e8cb63ecaa5cf6801",
".git/objects/30/d8575942b9633ed87c5ea94d7d54c2dc92c987": "7a19f53935f69c0a796a85098d9dc430",
".git/objects/30/6f31b380efb341e34b2214cd708df5f92f6681": "ac96c01aa7a9c084a782bd48166de40c",
".git/objects/ac/88ae9ff07613ab6be77b78ed744aa01c13e5b2": "dc5dc88350ac221188437d469d172e25",
".git/objects/23/304daede92595300728d465e64a4bbce862400": "9ec5b4bd3991d5085a147816019ff977",
".git/objects/23/d5ca71f2bd86efe21f120c95f09ca61a15774e": "9219f9698b0f5c7224fbc06c919bcb58",
".git/objects/74/c639f1582fbf4896315d7c0e594a14ece7a9b4": "2612937ebba59254e1cc511d22c56a33",
".git/objects/9b/a76facada70a60cf90a87270c90bde7fe8a9d2": "1b9bc83f33b8c6207180b95dcd04299c",
".git/objects/c4/3ffac77c4131d7172238b537cb86d6a522dbac": "631795096bcd5295ada1ff57ee71adb2",
".git/objects/09/03a6c5dd8a8b13074e5de60ecd0bb4d35dc768": "f1345f590bf41f3358d9a2115601862b",
".git/objects/09/e7642655fc576ca5f862f106f192d4acda1626": "06b7a42e6697dece2b3cf4ce90440929",
".git/objects/eb/6707185b19a402174e63a3a39ddf776dafb831": "1c3f17a6a2960075adc52faa4f7c04aa",
".git/objects/eb/0f6049c7c89a5f6625dc0f722565b7917d39be": "df5c187ce9cfaae51b90026dd4a8f500",
".git/objects/24/05b88fa753e06e1147c24a27050176479c624d": "ebb30746330aa50f128b6cddd30ad46a",
".git/objects/38/5b3f38b4c85244b3f5413635de40c76c6d8760": "3042c86e0641d5e0e5e95dedfd3692bc",
".git/objects/bf/d903287bf135ef5113fc0c33e9da4f77ced833": "c03bf483f790f7280f6d19759aa90d36",
".git/objects/a3/1c04af5cfc1c0a37f80f6bd4bcdac70e0e70f3": "901f7c3c196186b5e75e28b88b0fb78b",
".git/objects/a3/a242ecf4316731b46eda2d95c3b5c732d8034a": "b9206af2c846709424e9d14108bd4726",
".git/objects/a3/49654b0dd1e194e83f679a5bce8acb0db5cc7b": "52dfbc8544ebf347e07f9ae445bae415",
".git/objects/79/87479d788c3db3c4eca7e31a29734d65507657": "9cb40c5f24a9ba8270b92a5799a03834",
".git/objects/11/ab23d097c311be3d1ec56aaf79fcc215bc21c9": "c00adb9be963c8cfa2007c9ba5f24e08",
".git/objects/f6/a71b567b709a938da10de334b4a7505ea88f42": "ae4608e326fddba1506bce54cccd9066",
".git/objects/8c/aa3ad40285b9f93932901ac2d155f02d490657": "bd47f66ae81bcc854a72f8e01fb266dc",
".git/objects/ca/1a33b3ffe90764687ea78759f8f7268eb88930": "627c1fed888aefa6f49c55b1bf167477",
".git/objects/7b/fb6dca0d28f0453c6ee83f3848bdc13927de94": "52dc6ba251d57b2a32aef69df01af29e",
".git/objects/7b/9931412d9ab84c7dcfc7c18fd37a2392381553": "9eee2dcb06e61e3a3ef8963dc2a4de89",
".git/objects/78/38bb6414878ac1792e56c1a401ad4267cdc313": "10954cfeef8f72b94a10b23d318ad163",
".git/objects/42/5b7393fe888e9883b9145e451efc7a1b64220e": "f38f99e1b610461fc390133384db5003",
".git/objects/42/3ce1b0292125f4b2ab961f500134576a9c21e1": "5028297a8b79241c2741907d1e88e040",
".git/objects/29/b001f4f3270130815f578bca3af4b89d55c3c3": "ce4e1224a732e28bfc227a74361de9c8",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/51b02a43288b00e6124070c0bd5d0e0de32d34": "260bc86c45dae173eb7fb69a3342fb30",
".git/objects/2a/85b7fec559dbc7f13dc209d3378eea10757dec": "0eba598fdf964b31d97bcf25ed2d412b",
".git/objects/02/1eef320bb23d43f8d422a9bf1e8667c4a363a3": "bd590aa660276a5f80309d0a766851eb",
".git/objects/cd/e9b53a6ca15bb1297eed42f7fef3026c647160": "47c4fb2a5ac26548f38aa433c60a6935",
".git/objects/cd/e832496ea60ea18bbcfa9baa89c4e361a823e3": "80beb3c809a334f9198f9e11631e4b61",
".git/objects/13/cbb5bccbd74104b2bce81b2383a0601753a7e4": "df4ead8b9966993dea29dbdc04f9e85b",
".git/objects/47/57ae3ccef5f9f107f91ebd57df94d5ad1d141d": "0edc40ffcddce920b33068851662db67",
".git/objects/4b/c82b58a7c59ac77ef2d5bcbb5b0dddff61f73c": "e238b1062c349389bd17a9601742febd",
".git/objects/4b/62fd3255dfb4e5660107fdda0e22b16570c917": "c9d9079da6ebcc7d401469c97eeb2550",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/5d7434baf7706427522bb6144037d860088a35": "09d1503ef635aef3499eddcca814ba7e",
".git/objects/4b/c810ff388b58e0161c1475fd5e4fbc7a54452a": "126b42d01111afe726707e344097ce29",
".git/objects/ef/9b9f99901829e78f693bd322db4cc839f9abc0": "9dcbaf39f7db3fdb75c05bd3b5b1b915",
".git/objects/82/b3db025f8fab19e35c8ba784d8dcf947e5ea4f": "548553c040de50a3d52aa78887e4c031",
".git/objects/82/9c7438ea74598f447d135ca942330a8436d383": "0bfeab073b860efcc1301a28218a6520",
".git/objects/a6/96942e6429898e409a7e36ac19157e50958f06": "f531dd08f304210ae96a979288b5527a",
".git/objects/1e/7fdd15bcb9ef323063fda97d100d6403e22459": "49ab5f40aef32832c501b6ebd81d5a57",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/ab/e3a7275b156b7270b932b75f16a9b43ab4037b": "806e8751b24ea1f2c477383749e0962f",
".git/objects/22/d3696839743eeed476c4a257fd8db2230121c6": "73ca15c43143b38d69bfa0ac5d212398",
".git/objects/76/5bb5cd5891c19503af0747bb0a44bdc5244c30": "fea1bae23508fe2128ec46facefd2070",
".git/objects/46/48debe636ffc81f9bc793d56c9de28167bbb8c": "9869a1be5be23643e667880d1840faad",
".git/objects/46/5ebf2bc96074c18c049c865c2e449571dcaac9": "9309ef5a94451413c58f492cb6e7902a",
".git/objects/55/2a87f9193876d6004d7d462532207c1a93af37": "2392338138d300e17336c1eb94669a10",
".git/objects/a2/3eeed747236b4f98fbcfb2acc600cf1a81dbef": "a5c4308bdd129ce366d6b346dce4540d",
".git/objects/6b/5e3a7a1d66292ca503c94f302ad338f162d819": "92ec81f84bffc88084fcb9f3ca155182",
".git/objects/0a/e779bf67a58a43ebd51eb00244811031e2dd87": "8bc345788e26c9aed8f2bfa32f1eeea2",
".git/objects/70/45ee311889c257e4e8d06e4c3741beb7d932d2": "0fa5ff824943824d9b3f926b2f790d90",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/6107952b3e83fafcf8f27db91afef52056a19e": "a8a297d8ed67c5702c029bac53e8affc",
".git/objects/71/178bf3ad90b50eba3414b8ec29334ec26c2429": "fd30c49d572de79b944592e9cf640816",
".git/objects/dc/f14f87d5d9b6c941498454e6f6c440077d9232": "29302cc5de750824f7683f70e7d1856b",
".git/objects/f4/5ee8857e1d45e2a5d502426b660c72681ad2bc": "ee6cf1b813a08f879024858fd6afe801",
".git/objects/9a/a38bdd189ec4adab7185de520dec15901b791c": "d0605afe0ab68a8f72a7f2c61ae25402",
".git/objects/9a/c73235296ac5cc48f4fb8d500537d7bacf3fcb": "be2b679c5137e9dcba84a8c6a98c442d",
".git/objects/61/dd790987c991e2ea2bd9ed61cf7d70246d6579": "4909d7f5091b3c04dbe58f9f4453a07a",
".git/objects/61/53074ea699f382e13ffef6a8ecc7cf81f97cc8": "5230fed75dc59e02339e2e8b80c2a388",
".git/objects/61/913e5471ba861c0f4396446be62d948c0ad827": "6c4ee300536928521637aa43f9e911f7",
".git/objects/31/2cfa777c0570fc7d008009cbf79ead96cef9b6": "12e1fa4e7da13c5defdf6eff5dca5233",
".git/objects/5c/fa23e6d91695c2a35847fcf0703395d499ec93": "a12342c24fbb9011cb44a25926d7ff54",
".git/objects/d9/f89d463d670045a73c60bc068ed7c9a9a0eaaa": "15240d3b3a1b5b5a521b070bd66100ea",
".git/objects/d9/a49666b8d00bbc04c98ba0347c14225eaa0e33": "7ac57dfe25788b83272ca4d56fa58d01",
".git/objects/e4/2bf1443bfcdda919b4654e9b506423ca2ccc4d": "337c7ff3602d69e4f9536e75561c6d6b",
".git/objects/89/ffb8d16f5c6dd55881602adcf36aecb29b7dad": "de3e2f28fa90944d583c9ef0bedb211f",
".git/objects/91/973a7e771679794bcf656fe1466c247f3e2570": "3f81538f3f560b48f3365a7cdefc4cee",
".git/objects/cf/7258e86905b3b31246857eac793239ea91e182": "b0255bc0b3fbea937c090ec8d1e8fe56",
".git/objects/95/a5385d2d4346d8159237681f144d6ea8f4cb4a": "9e4d83714f56837757b3e59ba360fef9",
".git/objects/95/14db1a229244527de59b3c2847e31283c0c7ef": "1adf4e090fbd0ddf8bfcae8d51c371f4",
".git/objects/77/97f7c6a7356b0d451d11a49925df854c22e978": "1aa892ecd25dc2a457249503f1fe6ea8",
".git/index": "ff5fb45523bc2e8f368af89012344f4d",
".git/COMMIT_EDITMSG": "6ca6109bffe81637f0e30c78e178542f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "62ffa89ff28b270e320f32704d378438",
".git/logs/refs/heads/main": "4ecbf92d9c08153c3591a2db71bd3078",
".git/logs/refs/remotes/origin/main": "07d75987e53e2ae4df4ab8cbff897c9c",
".git/config": "fdd244e61f4a286201d35012e4f8d291",
"version.json": "716b54feee17c7de22f57fdcb251415d",
"index.html": "d5c302291ff7bd8ee4f086b2de83d94f",
"/": "d5c302291ff7bd8ee4f086b2de83d94f",
"manifest.json": "21c9c69f2ac7037eb7fbcb8e964e546a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
