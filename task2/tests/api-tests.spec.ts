import superagent from "superagent";
import {
  baseUrl,
  post,
  getRequest,
  postRequest,
  putRequest,
  patchRequest,
  deleteRequest,
} from "../consts/consts";

describe("API tests method Get", () => {
  it("1 - Get - Check that all posts will be back", async () => {
    const endpoint = `${baseUrl}posts`;
    const result = await getRequest(endpoint);
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
    expect(result.body.length).toBeGreaterThan(0);
  });

  it("2 - Get - Check that post by postId will be back ", async () => {
    const postId = 1;
    const endpoint = `${baseUrl}posts/${postId}`;
    const result = await getRequest(endpoint);
    expect(result.status).toBe(200);
    expect(result.body.id).toBe(1);
    expect(result.body).toEqual(post);
  });

  it("3 - Get - Check that comments by postId will be back", async () => {
    const postId = 1;
    const endpoint = `${baseUrl}posts/${postId}/comments`;
    const result = await getRequest(endpoint);
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
    result.body.forEach((comment: any) => {
      expect(comment).toHaveProperty("postId", postId);
      expect(comment).toHaveProperty("id");
      expect(comment).toHaveProperty("name");
      expect(comment).toHaveProperty("email");
      expect(comment).toHaveProperty("body");
    });
  });

  it("4 - Get - Check that post by postId will be back", async () => {
    const postId = 1;
    const endpoint = `${baseUrl}comments`;
    const queryParams = { postId: postId };
    const result = await getRequest(endpoint, queryParams);
    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Array);
    expect(
      result.body.every(
        (comment) =>
          comment.hasOwnProperty("id") &&
          comment.hasOwnProperty("postId") &&
          comment.hasOwnProperty("name") &&
          comment.hasOwnProperty("email") &&
          comment.hasOwnProperty("body")
      )
    ).toBe(true);
  });

  it("5 - Get - Check that API correctly handles the case where user use non-existent  postId", async () => {
    const invalidPostId = 999991111127293792173971982;
    const endpoint = `${baseUrl}/posts/${invalidPostId}/comments`;
    const response = await getRequest(endpoint);
    expect(response.body).toEqual([]);
    expect(response.status).toBe(200);
  });

  it("6 - Get - Check that API correctly handles the case where postId does not exist", async () => {
    const invalidPostId = 991;
    const endpoint = `${baseUrl}/posts/${invalidPostId}`;
    const response = await getRequest(endpoint);
    expect(response.body).toEqual({});
    expect(response.status).toBe(404);
  });
});

describe("API tests method Post", () => {
  it("1 - Post - Check creating post", async () => {
    const endpoint = `${baseUrl}posts`;
    const newPost = {
      title: "testв1",
      body: "m",
      userId: "1",
      id: 1,
    };

    const response = await postRequest(endpoint, newPost);

    expect(response.body.title).toBe(newPost.title);
    expect(response.body.body).toBe(newPost.body);
    expect(response.body.userId).toBe(newPost.userId);
    expect(response.body).toHaveProperty("id");
  });

  it("2 - Post - Check resons body - json", async () => {
    const endpoint = `${baseUrl}posts`;
    const newPost = {
      title: "Test post",
      body: "Hello world! This is a new post",
      userId: 1,
    };
    const response = await postRequest(endpoint, newPost);
    expect(response.headers["content-type"]).toContain("application/json");
  });

  it("3 - Post - Check response id - number", async () => {
    const endpoint = `${baseUrl}posts`;
    const newPost = {
      title: "Test post",
      body: "Hello world! This is a new post",
      userId: 1,
    };
    const response = await postRequest(endpoint, newPost);
    expect(typeof response.body.id).toBe("number");
  });

  it("4 - Post - Check  post request by not exist url", async () => {
    const endpoint = `${baseUrl}postst`;

    const newPost = {
      title: "Test post",
      body: "Hello world! This is a new post",
      userId: 1,
    };
    const response = await postRequest(endpoint, newPost);
    expect(response.status).toBe(404);
  });

  it("5 - Post - Check creating post -  Status 201", async () => {
    const endpoint = `${baseUrl}posts`;
    const newPost = {
      title: "Test post",
      body: "Hello world! This is a new post",
      userId: 1,
    };

    const response = await postRequest(endpoint, newPost);
    expect(response.status).toBe(201);
  });
});

describe("API tests method  Put", () => {
  it("1 - Put - should successfully update an existing post", async () => {
    const postId = 22;
    const endpoint = `${baseUrl}posts/${postId}`;
    const updatedPost = {
      id: 22,
      title: "test",
      body: "bar",
      userId: 22,
    };

    const response = await putRequest(endpoint, updatedPost);
    expect(response.body.title).toBe(updatedPost.title);
    expect(response.body.body).toBe(updatedPost.body);
    expect(response.body.userId).toBe(updatedPost.userId);
    expect(response.body.id).toBe(updatedPost.id);
  });

  it("2 - Put - Check response status code ", async () => {
    const postId = 23;
    const endpoint = `${baseUrl}posts/${postId}`;
    const updatedPost = {
      id: 1,
      title: "foo",
      body: "bar",
      userId: 3,
    };

    const response = await putRequest(endpoint, updatedPost);
    expect(response.status).toBe(200);
  });

  it("3 - Put - Check response is json file", async () => {
    const postId = 24;
    const endpoint = `${baseUrl}posts/${postId}`;
    const updatedPost = {
      id: 1,
      title: "foo",
      body: "bar",
      userId: 4,
    };

    const response = await putRequest(endpoint, updatedPost);
    expect(response.headers["content-type"]).toContain("application/json");
  });

  it("4 - Put - Check response is not empty", async () => {
    const postId = 25;
    const endpoint = `${baseUrl}posts/${postId}`;
    const updatedPost = {
      id: 1,
      title: "foo",
      body: "bar",
      userId: 5,
    };

    const response = await putRequest(endpoint, updatedPost);
    expect(response.body).toBeTruthy();
  });

  it("5 - Put - Check response body equal sent data", async () => {
    const postId = 1;
    const endpoint = `${baseUrl}posts/${postId}`;
    const updatedPost = {
      id: 1,
      title: "foo",
      body: "bar",
      userId: 6,
    };
    const response = await putRequest(endpoint, updatedPost);

    expect(response.body).toEqual(updatedPost);
  });
});

describe("API tests method  Patch", () => {
  it("1 - Patch - should successfully update an existing post - status code", async () => {
    const postId = 2;
    const endpoint = `${baseUrl}posts/${postId}`;
    const updatedTitle = {
      title: "hello",
    };

    const response = await patchRequest(endpoint, updatedTitle);
    expect(response.status).toBe(200);
  });

  it("2 - Patch - should successfully update an existing post", async () => {
    const postId = 3;
    const endpoint = `${baseUrl}posts/${postId}`;
    const updatedTitle = {
      title: "food",
    };

    const response = await patchRequest(endpoint, updatedTitle);
    expect(response.body).toEqual(expect.objectContaining(updatedTitle));
  });

  it("3 - Patch - send empty body - status code check", async () => {
    const postId = 4;
    const endpoint = `${baseUrl}posts/${postId}`;
    const response = await patchRequest(endpoint, {});
    expect(response.status).toBe(200);
  });

  it("4 - Patch - should return all existing fields in the response", async () => {
    const postId = "5";
    const endpoint = `${baseUrl}posts/${postId}`;
    const updatedTitle = {
      title: "food",
    };

    const response = await patchRequest(endpoint, updatedTitle);

    expect(response.body).toHaveProperty("userId");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("title");
    expect(response.body).toHaveProperty("body");
  });

  it("5 - Patch - Updatating  should return 404 error", async () => {
    const postId = "";
    const endpoint = `${baseUrl}posts/${postId}`;
    const updatedFields = {
      title: "Updated title",
    };
    const response = await patchRequest(endpoint, updatedFields);
    expect(response.status).toBe(404);
  });
});

describe("API tests method  Delete", () => {
  it("1 - Delete - check status code", async () => {
    const postId = 1;
    const endpoint = `${baseUrl}posts/${postId}`;
    const response = await deleteRequest(endpoint);
    expect(response.status).toBe(200);
  });

  it("2 - Delete - check empty response", async () => {
    const postId = 12;
    const endpoint = `${baseUrl}posts/${postId}`;
    const response = await deleteRequest(endpoint);
    expect(response.body).toEqual({});
  });
});
