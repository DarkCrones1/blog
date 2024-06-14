export interface CommentaryResponseDto {
  Id: number;
  Description: string;
  UserAccountId: number;
  UserInfoName: string;
  UserInfoProfilePictureUrl: string;
  PostId: number;
  PostName: string;
  IsDeleted: boolean;
}
