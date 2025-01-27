interface as pageState{
    currentPage: string;
}

const initialState: pageState = {
    currentPage: typeof window !== 'undefined' && localStorage.getItem('currentPage') 
    ? localStorage.getItem('currentPage')
    : 'Home Page',
};

