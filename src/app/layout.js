import './styles.css'
import Script from 'next/script'


export const metadata = {
  title: 'DashBoard ',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className = "">
        <>
          {children}
          <Script src="https://kit.fontawesome.com/54a764751d.js" crossorigin="anonymous"></Script>
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></Script>
          <Script src="js/scripts.js"></Script>
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></Script>
          <Script src="assets/demo/chart-area-demo.js"></Script>
          <Script src="assets/demo/chart-bar-demo.js"></Script>
          <Script src="assets/demo/chart-pie-demo.js"></Script>
          <Script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></Script>
          <Script src="js/datatables-simple-demo.js"></Script>
        </>
      </body>
    </html>
  )
}
