    //****************************************
    //成功関数
    //****************************************
    let map;

    function mapsInit(position) {
      console.log(position,"成功")
      //lat=緯度、lon=経度 を取得
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      //Map表示
      map = new Bmap("#myMap");
      map.startMap(35.544183970713334, 134.81330869397715, "load", 20); //The place is Bellevue.
      //Pinを追加
      let pin = map.pin(35.544183970713334, 134.81330869397715, "#0066FF");
      let pin_izushi_tokubetu = map.pin(35.47786214757359, 134.86872629492163, "#ff9900");
      let pin_seiwaen = map.pin(35.4765884892285, 134.86928487545512, "#ff0000");
      let pin_seiwaen2 = map.pin(35.4714349,134.8419697, "#ff0000");
      let pin_toyosyou = map.pin(35.541965219092525, 134.82205814002293, "#ff9900");
      //Infoboxを追加
      map.infobox(35.544183970713334, 134.81330869397715, "豊岡駅", "駅");
      map.infobox(35.47786214757359, 134.86872629492163, "出石特別支援学校", "特別支援学校");
      map.infobox(35.4765884892285, 134.86928487545512, "出石精和園児童寮", "生活支援施設");
      map.infobox(35.4714349,134.8419697, "出石精和園成人寮", "生活支援施設");
      map.infobox(35.541965219092525, 134.82205814002293, "豊岡小学校", "ひまわり学級(特別支援学級)");
    };

    //****************************************
    //失敗関数
    //****************************************
    function mapsError(error) {
      let e = "";
      if (error.code == 1) { //1＝位置情報取得が許可されてない（ブラウザの設定）
        e = "位置情報が許可されてません";
      }
      if (error.code == 2) { //2＝現在地を特定できない
        e = "現在位置を特定できません";
      }
      if (error.code == 3) { //3＝位置情報を取得する前にタイムアウトになった場合
        e = "位置情報を取得する前にタイムアウトになりました";
      }
      alert("エラー：" + e);
    };

    //****************************************
    //オプション設定
    //****************************************
    const set = {
      enableHighAccuracy: true, //より高精度な位置を求める
      maximumAge: 20000, //最後の現在地情報取得が20秒以内であればその情報を再利用する設定
      timeout: 10000 //10秒以内に現在地情報を取得できなければ、処理を終了
    };


    //最初に実行する関数
    function GetMap() {
      navigator.geolocation.getCurrentPosition(mapsInit, mapsError, set);
    }