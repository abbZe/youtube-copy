import { createSlice } from "@reduxjs/toolkit"
import { InitialState } from "../../Types"

const initialState: InitialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: [],
}

const youtubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {},
  extraReducers: builder => { },
})

export default youtubeSlice.reducer

