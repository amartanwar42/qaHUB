import { combineReducers } from "redux";
import authReducer from "./authReducer";
import categoryReducer from './categoryReducer';
import shareknowledgeReducer from './shareKnowledgeReducer'
import contentReducer from './content'
import createCategoryReducer  from "./createCategoryReducer";
import pendingSubmissionReducer from './PendingSubmissionReducer'
import updateCategoryReducer from './UpdateCategoryReducer'
import statsReducer from './statsReducer'
import userAllContentReducer from './userAllContentReducer'
import userPublishedContentReducer from './userPublisedContent'

export default combineReducers({
  auth: authReducer,
  category:categoryReducer,
  shareKnowledge:shareknowledgeReducer,
  content:contentReducer,
  createCategory:createCategoryReducer,
  pendingSubmission:pendingSubmissionReducer,
  updateCategory:updateCategoryReducer,
  stats:statsReducer,
  userContent:userAllContentReducer,
  userPublishedContent:userPublishedContentReducer
});