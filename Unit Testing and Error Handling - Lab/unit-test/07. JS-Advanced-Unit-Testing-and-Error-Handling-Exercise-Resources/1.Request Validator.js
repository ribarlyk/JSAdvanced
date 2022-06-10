function validator(obj) {
  let result = {};
  if (obj.hasOwnProperty("method")) {
    if (
      obj["method"] === "GET" ||
      obj["method"] === "POST" ||
      obj["method"] === "DELETE" ||
      obj["method"] === "CONNECT"
    ) {
      result["method"] = obj["method"];
    } else {
      throw new Error(`Invalid request header: Invalid Method`);
    }
  } else {
    throw new Error(`Invalid request header: Invalid Method`);
  }

  let regex = new RegExp(/^[\w.]+$/, "g");

  if (obj.hasOwnProperty("uri")) {
    if (regex.test(obj["uri"]) == true ||obj["uri"] === '*' ) {
      result["uri"] = obj["uri"];
    } else {
      throw new Error(`Invalid request header: Invalid URI`);
    }
  } else {
    throw new Error(`Invalid request header: Invalid URI`);
  }

  if (obj.hasOwnProperty("version")) {
    if (
      obj["version"] === "HTTP/0.9" ||
      obj["version"] === "HTTP/1.0" ||
      obj["version"] === "HTTP/1.1" ||
      obj["version"] === "HTTP/2.0"
    ) {
      result["version"] = obj["version"];
    } else {
      throw new Error(`Invalid request header: Invalid Version`);
    }
  } else {
    throw new Error(`Invalid request header: Invalid Version`);
  }
  let regex2 = new RegExp(/^[^<>\\&'"]*$/, "g");
  if (obj.hasOwnProperty("message")) {
    if (regex2.test(obj["message"])) {
      result["message"] = obj["message"];
    } else {
      throw new Error(`Invalid request header: Invalid Message`);
    }
  } else {
    throw new Error(`Invalid request header: Invalid Message`);
  }

  return obj;
}
validator({
  method: "GET",
  uri: "svn.public.catalog",
  version: "HTTP/1.1",
  message: "(*&(!&@(#*&!@&^$!@#)(_",
});

validator({
  method: "POST",
  uri: "home.bash",
  message: "rm -rf /*",
});
