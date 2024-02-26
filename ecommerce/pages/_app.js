import '@/styles/globals.css'
import { store } from './redux/app/Store'
import { Provider } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { ChakraProvider } from '@chakra-ui/provider';


export default function App({ Component, pageProps }) {
  // const notify = () => toast("Wow so easy!");

  return(
    //  <ChakraProvider>
        <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
        </Provider>
      // </ChakraProvider>
  )
}
