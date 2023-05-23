# Build android

## Gradle

Gradle is a build automation tool that is widely used in the Android ecosystem, including React Native projects. It is responsible for compiling, building, and managing dependencies for your React Native Android project.

<br>

### Gradle requirement

<details>
<summary>Install specific Java version in Android Studio</summary>

On Android studio navigate to `gradle settings` and download/select select the right version of Gradle JDK

</details>

<br>

### Managing gradle versions

[Gradle & Plugin matrix](https://developer.android.com/studio/releases/gradle-plugin?hl=fr#updating-gradle)

<details>
<summary>Gradle</summary>

```properties
# path: android/gradle/wrapper/gradle-wrapper.properties

distributionUrl=https\://services.gradle.org/distributions/gradle-<VERSION>.zip
```

</details>

<details>
<summary>Plugin</summary>

```gradle
// path: android/build.gradle

buildscript {
    dependencies {
        classpath 'com.android.tools.build:gradle:<VERSION>'
    }
}
```

</details>
