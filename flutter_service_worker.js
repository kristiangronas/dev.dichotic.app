'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"sql-wasm.wasm": "51739179fd57f102da5297192df613e7",
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
"assets/NOTICES": "e47490e6bac1ec009a862fc0aede4a74",
"assets/FontManifest.json": "209e66e2f71c646cc7eb744ea1cea0dc",
"assets/fonts/MaterialIcons-Regular.otf": "30ec6f61870e217872363dc1101af298",
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
"main.dart.js": "6ca3ef318df01460906a9fb7292fe4ea",
"version.json": "716b54feee17c7de22f57fdcb251415d",
"index.html": "64d39549129e2586818147e1fcf42912",
"/": "64d39549129e2586818147e1fcf42912",
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
