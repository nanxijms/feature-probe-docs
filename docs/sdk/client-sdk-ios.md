---
sidebar_position: 4
---

# Client SDK iOS

## iOS Usage

### Swift

#### Step 1. Install SDK

Swift Package Manager:

    1. XCode -> File -> Add Packages -> input `https://github.com/FeatureProbe/client-sdk-ios.git`
    2. click `Add Package`

Cocoapods:

    1. add `pod 'FeatureProbe', :git => 'git@github.com:FeatureProbe/client-sdk-ios.git'` to Podfile
    2. `pod install` or `pod update`

#### Step 2. Create a FeatureProbe instance

```swift
import featureprobe

let url = FpUrlBuilder(remoteUrl: "remote_url/").build();
let user = FpUser(key: "user@company.com")
user.setAttr(key: "name", value: "bob")
let config = FpConfig(
    remoteUrl: url!,
    clientSdkKey: "client-9d885a68ca2955dfb3a7c95435c0c4faad70b50d",
    refreshInterval: 10,
    waitFirstResp: true
)
let fp = FeatureProbe(config: config, user: user)
```

#### Step 3. Use the feature toggle

```swift
let showFeature = fp.boolValue("your.toggle.key", false)
if showFeature {
    # application code to show the feature
} else {
    # the code to run if the feature is off
}
```

#### Step 4. Unit Testing (Optional)

```swift
let fp2 = FeatureProbe.newForTest(toggles: "{ \"toggle_1\": true }")
let is_true = fp2.boolValue(key: "toggle_1", defaultValue: false)
assert(is_true == true);
```

Find the Demo code in [example](https://github.com/FeatureProbe/client-sdk-mobile/tree/main/sdk-ios/demo-cocoapods)

### Objective-C

#### Step 1. Install SDK

Cocoapods

add `pod 'FeatureProbe', :git => 'git@github.com:FeatureProbe/client-sdk-ios.git'` to Podfile

`pod install` or `pod update`

#### Step 2. Create a FeatureProbe instance

```objective-c
#import "FeatureProbe-Swift.h"

NSString *urlStr = @"remote_url/";
FpUrl *url = [[[FpUrlBuilder alloc] initWithRemoteUrl: urlStr] build];
FpUser *user = [[FpUser alloc] initWithKey:@"user_key"];
[user setAttrWithKey:@"name" value:@"bob"];
FpConfig *config = [[FpConfig alloc] initWithRemoteUrl: url
                                          clientSdkKey:@"client-9d885a68ca2955dfb3a7c95435c0c4faad70b50d"
                                       refreshInterval: 10
                                         waitFirstResp: true];
FeatureProbe *fp = [[FeatureProbe alloc] initWithConfig:config user:user];
```

#### Step 3. Use the feature toggle

```objective-c
bool showFeature = [fp boolValueWithKey: @"your.toggle.key" defaultValue: false];
if (showFeature) {
    # application code to show the feature
} else {
    # the code to run if the feature is off
}
```

#### Step 4. Unit Testing (Optional)

```objective-c
#import "FeatureProbe-Swift.h"

NSString *s = @"{ \"ab_test\": \"green\"}";
FeatureProbe *fp = [[FeatureProbe alloc] initWithTestJson: s];
NSString *value = [fp stringValueWithKey:@"ab_test" defaultValue:@"red"];
NSLog(@"value is %@", value);
```

Find the Demo code in [example](https://github.com/FeatureProbe/client-sdk-mobile/tree/main/sdk-ios/demo-objc)
