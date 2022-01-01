// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// protoのバージョン
'use strict';
var grpc = require('@grpc/grpc-js');
var sample_pb = require('./sample_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_game_Greeting(arg) {
  if (!(arg instanceof sample_pb.Greeting)) {
    throw new Error('Expected argument of type game.Greeting');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_Greeting(buffer_arg) {
  return sample_pb.Greeting.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_game_Reply(arg) {
  if (!(arg instanceof sample_pb.Reply)) {
    throw new Error('Expected argument of type game.Reply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_game_Reply(buffer_arg) {
  return sample_pb.Reply.deserializeBinary(new Uint8Array(buffer_arg));
}


// API全体のサービスを定義
var RockPaperScissorsServiceService = exports.RockPaperScissorsServiceService = {
  // 挨拶を行う
// 自分の名前と相手の名前を入れると、返事が返ってくる
hello: {
    path: '/game.RockPaperScissorsService/Hello',
    requestStream: false,
    responseStream: false,
    requestType: sample_pb.Greeting,
    responseType: sample_pb.Reply,
    requestSerialize: serialize_game_Greeting,
    requestDeserialize: deserialize_game_Greeting,
    responseSerialize: serialize_game_Reply,
    responseDeserialize: deserialize_game_Reply,
  },
};

exports.RockPaperScissorsServiceClient = grpc.makeGenericClientConstructor(RockPaperScissorsServiceService);
