import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(1);
  const [coin, setCoin] = useState(141800);

  const increment =()=>{
       setCounter(counter+1);
       setCoin(coin+141800);
 }

  const decrement =()=>{
       setCounter(counter-1);
       setCoin(coin-141800);
 }
 


  return (
    <View style={styles.container}>
      <View style={styles.container_first}>
          <View style={styles.container_first_1}>
            <Image style={styles.book} source={require('../LTTBDDNC_Buoi03-master/assets/book.png')}/>
            <View style={styles.container_first_1_2}>
              <Text style={styles.text_1}>Nguyên hàm tích phân và ứng dụng</Text>
              <Text style={styles.text_1}>Cung cấp bởi Tiki Trading</Text>
              <Text style={styles.price}>141.800 đ</Text>
              <Text style={styles.price_voucher}>
                141.800 đ
              </Text>
              <View style={styles.line}></View>
              <View style={styles.container_first_1_2_3}>
                <View style={styles.container_first_1_2_3_4}>
                  <TouchableOpacity onPress={() => decrement()}  activeOpacity={0.8} style={styles.btnRemove}>
                    <Image style={styles.book} source={require('../LTTBDDNC_Buoi03-master/assets/btnminus.png')}/>
                  </TouchableOpacity>
                  <Text style={styles.amount}>{counter <= 1 ? 1 : counter}</Text>
                  {/* <TextInput style={styles.amount}>1</TextInput> */}
                  <TouchableOpacity onPress={() => increment()} activeOpacity={0.8} style={styles.btnAdd}>
                    <Image style={styles.book} source={require('../LTTBDDNC_Buoi03-master/assets/btnadd.png')}/>
                  </TouchableOpacity>
                </View>
                <Text style={styles.text_buyLater}>Mua sau</Text>
              </View>
            </View>
          </View>

          <View style={styles.container_first_2}>
            <Text style={styles.voucher}>Mã giảm giá đã lưu</Text>
            <Text style={styles.seen}>Xem tại đây</Text>
          </View>

          <View style={styles.container_first_3}>
              <View style={styles.inputVoucher}>
                  <View style={styles.inputVoucher_Left}>
                    <View style={styles.yellow}></View>
                  </View>
                  <TextInput style={styles.maGiam} placeholder="Mã giảm giá"></TextInput>
              </View>
              <TouchableOpacity activeOpacity={0.8} style={styles.btnApply}>
                    <Text style={styles.textBtn}>Áp dụng</Text>
              </TouchableOpacity>
          </View>
      </View>
      <View style={styles.container_second}>
          <Text style={styles.textLeft_container_second}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Text style={styles.textRight_container_second}>Nhập tại đây?</Text>
      </View>

      <View style={styles.container_Three}>

        <View style={styles.container_Three_Outside}>

          <View style={styles.container_Three_Outside_1}>
            <Text style={styles.textLeft_container_Three_second}>Tạm tính</Text>
          </View>  

          <View style={styles.container_Three_Outside_2}>
            <Text style={styles.textRight_container_Three_second}>{coin <= 141800 ? 141800 : coin} đ</Text>
          </View>

        </View>  
          
      </View>

      <View style={styles.container_Four}>
        <View style={styles.container_Three_Outside}>

          <View style={styles.container_Three_Outside_1}>
            <Text style={styles.textLeft_container_Three_second}>Thành tiền</Text>
          </View>  

          <View style={styles.container_Three_Outside_2}>
            <Text style={styles.textRight_container_Three_second}>{coin <= 141800 ? 141800 : coin} đ</Text>
          </View>

        </View>  

        <TouchableOpacity activeOpacity={0.8} style={styles.btnDatHang}>
                    <Text style={styles.textBtnDH}>TIẾN HÀNH ĐẶT HÀNG</Text>
       </TouchableOpacity>

      </View>

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection:'column',
    //justifyContent: 'center', can giua chieu doc
    backgroundColor:'#C4C4C4',
  },
  container_first:{
    flex:0.4,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    top:0,
    marginBottom:20
  },

  container_first_1:{
    width:'80%',
    flexDirection:'row',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20
  },

  container_first_1_2:{
    justifyContent:'center',
  },

  book:{
    marginRight:10,
  },
  
  text_1:{
    fontSize:12,
    lineHeight:14.06,
    fontWeight:'bold',
    marginBottom:5
  },

  price:{
    fontSize:18,
    lineHeight:21.09,
    color:'#EE0D0D',
    fontWeight:'bold',
    marginTop:5,
    marginBottom:5
  },
  price_voucher:{
    fontSize:12,
    lineHeight:14.06,
    color:'#808080',
    position:'relative',
    marginBottom:10
  },
  line:{
    position:'absolute',
    width:60,
    height:1,
    borderTopWidth:1,
    borderTopColor:'#808080',
    top:76
  },

  container_first_1_2_3:{
    width:'100%',
    flexDirection:'row',
    display:'flex',
    overflow:'hidden'
  },
  container_first_1_2_3_4:{
    marginRight:100,
    flexDirection:'row'
  },

  text_buyLater:{
    color:'#134FEC',
    fontSize:12,
    lineHeight:14.06,
    fontWeight:'bold',
    justifyContent:'flex-end'
  },

  btnRemove:{
    width:20,
    height:16
  },

  btnAdd:{
    width:20,
    height:16
  },
  amount:{
    width:30,
    height:16,
    textAlign:'center'
  },

  container_first_2:{
    flexDirection:'row',
    width:'80%',
    justifyContent:'flex-start',
    alignItems:'center',
    marginBottom:30
  },

  container_first_3:{
    flexDirection:'row',
    width:'80%',
    //justifyContent:'center',
    alignItems:'center'
  },

  voucher:{
    width:104,
    line:14.06,
    marginRight:10,
    fontSize:11,
    fontWeight:'bold'
  },

  seen:{
    width:104,
    line:14.06,
    fontSize:11,
    fontWeight:'bold',
    color:'#134FEC'
  },

  inputVoucher:{
    width:208,
    height:45,
    flexDirection:'row',
    borderWidth:1,
    borderColor:'gray',
    marginRight:30

  },

  inputVoucher_Left:{
    width:'30%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },

  yellow:{
    width:32,
    height:16,
    backgroundColor:'#F2DD1B',
  },
  btnApply:{
    width:99,
    height:45,
    backgroundColor:'#0A5EB7',
    justifyContent:'center',
    alignItems:'center'
  },

  textBtn:{
    fontSize:20,
    lineHeight:23.44,
    color:'#fff'
  },

  container_second:{
    flex:0.05,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    top:0,
    marginBottom:20,
    flexDirection:'row',
  },

  textLeft_container_second:{
    fontSize:12,
    lineHeight:14.06,
    fontWeight:'bold',
    marginRight:5
  },

  textRight_container_second:{
    fontSize:12,
    lineHeight:14.06,
    fontWeight:'bold',
    color:'#134FEC'
  },

  container_Three:{
    flex:0.05,
    backgroundColor:'#fff',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%',
    top:0,
    marginBottom:60,
  },

  container_Three_Outside:{
    width:'80%',
    height:'100%',
    alignItems:'center',
    flexDirection:'row',
  },

  container_Three_Outside_1:{
    width:'50%',
  },
  container_Three_Outside_2:{
    width:'50%',
  },

  textLeft_container_Three_second:{
    fontSize:18,
    lineHeight:21.09,
    //marginLeft:40,
    fontWeight:'bold',
    textAlign:'left'
  },

  textRight_container_Three_second:{
    color:'#EE0D0D',
    fontWeight:'bold',
    textAlign:'right'
  },

  container_Four:{
    flex:'0.3',
    //justifyContent:'flex-end',
    top:'18%',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    backgroundColor:'#fff',
    flexDirection: 'column',
  },
  btnDatHang:{
    width:'80%',
    height:45,
    backgroundColor:'#E53935',
    bottom:'40%',
    justifyContent:'center',
    alignItems:'center'
  },

  textBtnDH:{
    fontSize:20,
    color:'#fff',
    lineHeight:23.44,
  }

});
