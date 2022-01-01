// GENERATED CODE -- DO NOT EDIT!

// package: game
// file: sample.proto

import * as sample_pb from "./sample_pb";
import * as grpc from "@grpc/grpc-js";

interface IRockPaperScissorsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  hello: grpc.MethodDefinition<sample_pb.Greeting, sample_pb.Reply>;
}

export const RockPaperScissorsServiceService: IRockPaperScissorsServiceService;

export interface IRockPaperScissorsServiceServer extends grpc.UntypedServiceImplementation {
  hello: grpc.handleUnaryCall<sample_pb.Greeting, sample_pb.Reply>;
}

export class RockPaperScissorsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  hello(argument: sample_pb.Greeting, callback: grpc.requestCallback<sample_pb.Reply>): grpc.ClientUnaryCall;
  hello(argument: sample_pb.Greeting, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<sample_pb.Reply>): grpc.ClientUnaryCall;
  hello(argument: sample_pb.Greeting, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<sample_pb.Reply>): grpc.ClientUnaryCall;
}
