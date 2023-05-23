# Android native cover screen

The idea is to use app lifecycle methods `onPause` and `onResume` to toggle display the native cover screen

## App lifecycle

<details>
<summary>MainActivity.java</summary>

```java
  @Override
  protected void onPause() {
    showCoverScreen(); // to implement
    super.onPause();
  }

  @Override
  protected void onResume() {
    hideCoverScreen(); // to implement
    super.onResume();
  }
```

</details>

<details>
<summary>CoverScreenModule.java</summary>

```java

public class CoverScreenModule extends ReactContextBaseJavaModule {
    private Activity mActivity;

    public CoverScreenModule(ReactApplicationContext reactContext, Activity activity) {
        super(reactContext);
        mActivity = activity;
    }

    @Override
    public String getName() {
        return "CoverScreenModule";
    }

    @ReactMethod
    public void showCoverScreen() {
        mActivity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                mActivity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
            }
        });
    }

    @ReactMethod
    public void hideCoverScreen() {
        mActivity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                mActivity.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
            }
        });
    }
}
```

</details>
