import { CommentaryResponseDto } from "./CommentaryResponseDto";

export interface PostDetalResponseDto {
  Id: number;
  Name: string;
  Description: string;
  Status: string;
  IsActive: boolean;
  ImagePostUrl: string;
  PublicationDate: Date;
  UserAccountId: number;
  UserInfoName: string;
  UserInfoProfilePictureUrl: string;
  Commentary: CommentaryResponseDto[];
}
