(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{c518:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <q-media-player\n    content-style="height: 100px; width: 100px"\n    bottom-controls\n    :sources="sources"\n    ref="qmp"\n    type="video"\n  >\n    <template v-slot:overlay>\n      <div class="full-width full-height"\n           style="top: 0; left: 0; position: absolute">\n        <div class="column q-ma-md q-pa-sm  bg-amber-3" style="position:absolute;">\n          We are playing the audio in video type player to test the <code>\n          bottom-controls\n        </code>\n        </div>\n      </div>\n    </template>\n  </q-media-player>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: \'https://raw.githubusercontent.com/quasarframework/quasar-ui-qmediaplayer/dev/demo/public/media/Scott_Holmes_-_04_-_Upbeat_Party.mp3\',\n          type: \'audio/mp3\'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n'}}]);