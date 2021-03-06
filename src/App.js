import 'semantic-ui-css/semantic.min.css';
import {
  Grid,
  Flag,
  Icon,
  Input,
  Header,
  Image,
  Divider,
  Label,
  Container,
  Button
} from 'semantic-ui-react';

function App() {
  return (
    <Grid>
      <Grid.Row></Grid.Row>
      <Grid.Row columns={4}>
        <Grid.Column width='1' textAlign='right'>
          <Flag name='id'/>
        </Grid.Column>
        <Grid.Column width='1' textAlign='center'>
          <Icon size='large' name='angle left'/>
        </Grid.Column>
        <Grid.Column width='1' textAlign='center'>
          <Icon size='large' name='angle right'/>
        </Grid.Column>
        <Grid.Column width='9'>
          <Input type='text' placeholder='search...' icon={<Icon name='star'/>} fluid/>
        </Grid.Column>
        <Grid.Column>
          <Header>
            <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' circular avatar/>
            Patrick
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Divider horizontal>SELAMAT DATANG!!!</Divider>
      <Grid.Row>
        <Grid.Column textAlign='right'>
          <Container>
            <Label as='a' tag color='teal'>SPORT</Label>
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row >
        <Grid.Column textAlign='center'>
          <Container>
            <br/>
            <p>Ducati tengah menunggu sidang Pengadilan Banding FIM tentang
            komponen aerodinamis. Andai gugatan para rivalnya diterima, akankah
            Ducati akan melanjutkan ke Cas(Pengadilan Arbitrase Olahraga)?
            Suzuki, Honda, KTM, dan Aprilia memprotes penggunaan komponen aero
            di motor Desmosedici Andrea Dovizioso dan Danilo Petrucci dalam
            balapan pertama MotoGP 2019 di Qatar karena dianggap ilegal. Pada
            prosesnya, Dovizioso tampil sebagai pemenang usai mengalahkan Marc
            Marquez. Keempat tim meyakini, komponen itu memiliki fungsi
            aerodinamis, dan menghasilkan downforce, yang membantu motor melesat
            di trek. Sementara Ducati bersikukuh komponen itu cuma untuk
            mendinginkan ban dan sudah disetujui Technical Director sebelum
            balapan. Pada awalnya, protes keempat tim itu ditolak oleh steward
            MotoGP sehingga dibawa ke Pengadilan Banding FIM. Sidang itu sendiri
            akan dilakukan sebelum seri kedua di Argentina digelar pada 29-31
            Maret mendatang. Manajer umum Ducati Gigi Dall'lgna berkukuh tidak
            ada yang ilegal dengan komponen itu. Namun, seandainya pengadilan
            mengabulkan gugatan tersebut Ducati akan mempertimbangkan
            melanjutkan kasus ini ke CAS. "Di dalam federasi, derajatnya
            berakhir di Pengadilan Banding FIM. Anda harus pergi ke CAS, yang
            adalah pengadilan olahraga tapi di dalam kasus ini Anda keluar dari
            perimeter FIM.",Dall'lgna mengungkapkan kepada MotoGP.com. "Saya
            bahkan tidak ingin memikirkan sampai titik ini. Kami sangat yakin
            bahwa kami tidak melanggar regulasi kok, dan yakin kami tidak melihat
            adanya alasan mengapa pengadilan banding bisa memutuskan secara
            berbeda."
            </p>
          </Container>
          <br/>
          <Button icon='plus' color='teal' labelPosition='left' content='Tambah Tautan Ke List'/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
