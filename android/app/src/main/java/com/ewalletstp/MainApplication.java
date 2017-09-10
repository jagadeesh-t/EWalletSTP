package com.ewalletstp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.azendoo.reactnativesnackbar.SnackbarPackage;
import com.avishayil.rnrestart.ReactNativeRestartPackage;
import io.invertase.firebase.RNFirebasePackage; // Firebase core
import io.invertase.firebase.crash.RNFirebaseCrashPackage; // Firebase Crash Reporting
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage; // Firebase Cloud Messaging
import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage; // Firebase Analytics
import com.oblador.vectoricons.VectorIconsPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.apsl.versionnumber.RNVersionNumberPackage;
import com.idehub.GoogleAnalyticsBridge.GoogleAnalyticsBridgePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import org.devio.rn.splashscreen.SplashScreenReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new SplashScreenReactPackage(),
            new SnackbarPackage(),
            new ReactNativeRestartPackage(),
            new RNDeviceInfo(),
            new VectorIconsPackage(),
            new RCTCameraPackage(),
            new RNVersionNumberPackage(),
            new GoogleAnalyticsBridgePackage(),
            new RNFirebasePackage(),
            new RNFirebaseCrashPackage(),
            new RNFirebaseMessagingPackage(),
            new RNFirebaseAnalyticsPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
