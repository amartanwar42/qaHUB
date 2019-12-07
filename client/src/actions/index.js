import axios from 'axios'
import {FETCH_USER, FETCH_CATEGORY, POST_SHAREKNOWLEDGE, FETCH_CONTENT, POST_CATEGORY, ACTIVE_SUBMISSION,PENDING_SUBMISSION, UPDATE_CATEGORY, STATS, USER_CONTENT, USER_ALL_CONTENT, USER_PUBLISED_CONTENT} from './types'

export const fetchUser = ()=> async (dispatch)=>{ 
    await axios.get('/api/current_user').then(results=>{        
        dispatch({ type: FETCH_USER, payload: results.data })
    })
    .catch(err =>{
        dispatch({ type: FETCH_USER, payload: "" })
    });
};

export const fetchCategory = ()=> async (dispatch)=>{ 
    await axios.get('/api/content/getCategory').then(results=>{        
        dispatch({ type: FETCH_CATEGORY, payload: results.data })
    })
    .catch(err =>{
        dispatch({ type: FETCH_CATEGORY, payload: "" })
    });
};

export const postShareknowledge = (values)=> async (dispatch)=>{ 

    await axios.post('/api/content/createShareKnowledge',values)
    .then(results=>{  
        console.log(results.data)
        dispatch({ type: POST_SHAREKNOWLEDGE, payload: results.data })
    })
    .catch(err =>{
        console.log(err.response.data)
        dispatch({ type: POST_SHAREKNOWLEDGE, payload:err.response.data })
    });
};

export const postCategory = (values)=> async (dispatch)=>{ 

    await axios.post('/api/content/createCategory',values)
    .then(results=>{    
        dispatch({ type: POST_CATEGORY, payload: results.data })
    })
    .catch(err =>{
        dispatch({ type: POST_CATEGORY, payload: err.response.data })
    });
};

export const updateCategory = (id,values)=> async (dispatch)=>{ 

    await axios.put(`/api/content/category?categoryId=${id}`,values)
    .then(results=>{   
        dispatch({ type: UPDATE_CATEGORY, payload: results.data })
    })
    .catch(err =>{
        dispatch({ type: UPDATE_CATEGORY, payload: err.response.data })
    });
};

export const fetchContent=(category,type,status)=>async (dispatch)=>{
    await axios.get(`api/content/getShareKnowledge?category=${category}&type=${type}&status=${status}`).then(results=>{  
        dispatch({ type: FETCH_CONTENT, payload: results.data })
        return true;
    })
    .catch(err =>{
        dispatch({ type: FETCH_CONTENT, payload: "" })
        return false;
    });
}

export const fetchPendingContent=(status)=>async (dispatch)=>{
    await axios.get(`api/content/getShareKnowledge?status=${status}&category=all`).then(results=>{         
        dispatch({ type: PENDING_SUBMISSION, payload: results.data })
    })
    .catch(err =>{
        dispatch({ type: PENDING_SUBMISSION, payload: "" })
    });
}

export const fetchPublishedContent=(status)=>async (dispatch)=>{
    await axios.get(`api/content/getShareKnowledge?status=${status}`).then(results=>{        
        dispatch({ type: ACTIVE_SUBMISSION, payload: results.data })
    })
    .catch(err =>{
        dispatch({ type: ACTIVE_SUBMISSION, payload: "" })
    });
}

export const fetchStats=(status)=>async (dispatch)=>{
    await axios.get('api/content/stats').then(results=>{    
        dispatch({ type: STATS, payload: results.data })
    })
    .catch(err =>{
        dispatch({ type: STATS, payload: "" })
    });
}

export const fetchUserAllContents=(userId)=>async (dispatch)=>{
    await axios.get(`/api/content/getUserContent?userId=${userId}`).then(results=>{    
        dispatch({ type: USER_ALL_CONTENT, payload: results.data })
    })
    .catch(err =>{
        dispatch({ type: USER_ALL_CONTENT, payload: "" })
    });
}

export const fetchUserPublishedContents=(userId)=>async (dispatch)=>{
    await axios.get(`/api/content/getUserContent?status=published&userId=${userId}`).then(results=>{    
        dispatch({ type: USER_PUBLISED_CONTENT, payload: results.data })
    })
    .catch(err =>{
        dispatch({ type: USER_PUBLISED_CONTENT, payload: "" })
    });
}