import { AxiosError } from "axios";
import { Album, Comment, ViewAlbum } from "types/album";
import { ActionType } from "typesafe-actions";
import * as albumActions from "./actions";

export type AlbumActions = ActionType<typeof albumActions>;

export interface AlbumState {
  loadAlbumsDone: boolean;
  loadAlbumsError: AxiosError | null;
  loadAlbumsLoading: boolean;

  loadCommentsDone: boolean;
  loadCommentsError: AxiosError | null;
  loadCommentsLoading: boolean;

  loadAlbumDone: boolean;
  loadAlbumError: AxiosError | null;
  loadAlbumLoading: boolean;

  albums: Album[];

  album: ViewAlbum | null;
  comments: Comment[] | null;

  albumOpen: boolean;
}
