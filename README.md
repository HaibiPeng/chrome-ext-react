# Description

It is a simple chrome browser extension template using React.

# Usage
### 1. Clone this repo
`
$ git clone https://github.com/HaibiPeng/chrome-ext-react.git
`

### 2. Install the dependencies
`
$ npm install
`

### 3. Build the extension

**a. Development mode**
`
$ npm run build
`

After build, upload the **src** folder at the chrome extension page by clicking **Upload unpack**.

Then go to [localhost:8080/options.html](localhost:8080/options.html) and you will see the option page of the extension.

**b. Production mode**

`
$ npm run build:prod
`

After build, upload the **dist** folder at the chrome extension page by clicking **Upload unpack**.

Then pin your extention and click the icon, you will see the popup page of the extension.