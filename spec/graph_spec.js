"use strict";

var Graph = require("../src/graph");

function addNodesTo(graph, addEdges) {
    var initEdgeSize, initNodeSize;
    if (addEdges === null) {
        addEdges = false;
    }

    initNodeSize = graph.nodeSize;
    graph.addNode("1");
    graph.addNode("2");
    graph.addNode("3");
    graph.addNode("4");
    graph.addNode("5");
    graph.addNode("6");
    expect(graph.nodeSize).toEqual(initNodeSize + 6);
    if (addEdges) {

        /*
        1 <- 2 <-> 3
        |^   ^     ^
        v \  |     |
        4   \5     6 <->
         */
        initEdgeSize = graph.edgeSize;
        expect(initEdgeSize).toEqual(0);
        graph.addEdge("1", "4", 9);
        graph.addEdge("2", "1", 9);
        graph.addEdge("2", "3", 9);
        graph.addEdge("3", "2", 9);
        graph.addEdge("5", "1", 9);
        graph.addEdge("5", "2", 9);
        graph.addEdge("6", "3", 9);
        graph.addEdge("6", "6", 9);
        expect(graph.edgeSize).toEqual(initEdgeSize + 8);
    }
}

describe("Test Graph", function() {

    describe("Add node", function() {
        var graph = new Graph();
        it("should have 0 edge and 0 node initially", function() {
            expect(graph.nodeSize).toEqual(0);
            expect(graph.edgeSize).toEqual(0);
        });
        it("should return the node object added, or undefined if the id exists", function() {
            expect((graph.addNode("item")) instanceof Object).toEqual(true);
            expect((graph.addNode("1")) instanceof Object).toEqual(true);
            expect((graph.addNode(null)) instanceof Object).toEqual(true);
        });
        it("should return undefined if the node id already exists", function() {
            expect(graph.addNode("item")).toEqual(undefined);
            expect(graph.addNode("1")).toEqual(undefined);
            expect(graph.addNode(null)).toEqual(undefined);
        });
        it("should have kept the node size constant with non-insertions", function() {
            expect(graph.nodeSize).toEqual(3);
        });
    });

    describe("Get node", function() {
        var graph = new Graph();
        it("should return undefined if the node's not found", function() {
            expect(graph.getNode(null)).toEqual(undefined);
            expect(graph.getNode(void 0)).toEqual(undefined);
            expect(graph.getNode(2)).toEqual(undefined);
        });
        it("should return the added node", function() {
            addNodesTo(graph);
            expect((graph.getNode("1")) instanceof Object).toEqual(true);
            expect((graph.getNode("2")) instanceof Object).toEqual(true);
            expect((graph.getNode("6")) instanceof Object).toEqual(true);
        });
        it("should return a defined object if null and undefined are found", function() {
            graph.addNode(null);
            graph.addNode(void 0);
            expect((graph.getNode(null)) instanceof Object).toEqual(true);
            expect((graph.getNode(void 0)) instanceof Object).toEqual(true);
        });
    });

    describe("Remove node", function() {
        var graph = new Graph();
        it("should return undefined if the node doesn't exist in the first place", function() {
            expect(graph.removeNode(null)).toEqual(undefined);
            expect(graph.removeNode(2)).toEqual(undefined);
        });

        it("should have kept the node size constant", function() {
            expect(graph.nodeSize).toEqual(0);
        });
        it("should return the value of node removed", function() {
            addNodesTo(graph);
            expect((graph.removeNode("1")) instanceof Object).toEqual(true);
            expect((graph.removeNode("3")) instanceof Object).toEqual(true);
            expect((graph.removeNode("6")) instanceof Object).toEqual(true);
        });
        it("should have updated the node size", function() {
            expect(graph.nodeSize).toEqual(3);
        });
        it("should have removed the node", function() {
            expect(graph.getNode("1")).toEqual(undefined);
            expect(graph.getNode("3")).toEqual(undefined);
            expect(graph.getNode("6")).toEqual(undefined);
        });
    });

    describe("Add edge", function() {
        var graph = new Graph();

        it("should return undefined if either/both nodes don't exist in the graph", function() {
            expect(graph.addEdge("7", "8")).toEqual(undefined);
            expect(graph.addEdge("1", "8")).toEqual(undefined);
            expect(graph.addEdge("99", "1")).toEqual(undefined);
            addNodesTo(graph);
            expect(graph.addEdge("7", "8")).toEqual(undefined);
            expect(graph.addEdge("1", "8")).toEqual(undefined);
            expect(graph.addEdge("99", "1")).toEqual(undefined);
        });

        it("should add the edge and return the edge object", function() {
            expect((graph.addEdge("1", "2")) instanceof Object).toEqual(true);
            expect((graph.addEdge("2", "1")) instanceof Object).toEqual(true);
            expect((graph.addEdge("3", "2")) instanceof Object).toEqual(true);
        });

        it("should have updated the edge size", function() {
            expect(graph.edgeSize).toEqual(3);
        });

        it("should have initiated the edge weight to 1", function() {
            expect(graph.addEdge("5", "2").weight).toEqual(1);
            expect(graph.addEdge("5", "6").weight).toEqual(1);
            expect(graph.addEdge("3", "6").weight).toEqual(1);
        });

        it("should allow the node to add an edge to itself", function() {
            expect((graph.addEdge("2", "2")) instanceof Object).toEqual(true);
            expect((graph.addEdge("6", "6")) instanceof Object).toEqual(true);
        });

        it("should count a self-directing edge as a single one", function() {
            expect(graph.edgeSize).toEqual(8);
        });

        it("should return undefined if the edge already exists", function() {
            expect(graph.addEdge("1", "2")).toEqual(undefined);
            expect(graph.addEdge("2", "2")).toEqual(undefined);
            expect(graph.addEdge("2", "1")).toEqual(undefined);
        });
    });

    describe("Get edge", function() {
        var graph;
        graph = new Graph();
        it("should return undefined if the nodes aren't found", function() {
            expect(graph.getEdge("1", "2")).toEqual(undefined);
        });
        it("should return undefined if the edge isn't found", function() {
            addNodesTo(graph, true);
            expect(graph.getEdge("3", "5")).toEqual(undefined);
            expect(graph.getEdge("1", "2")).toEqual(undefined);
        });
        it("should return the edge found", function() {
            expect((graph.getEdge("1", "4")) instanceof Object).toEqual(true);
            expect((graph.getEdge("2", "1")) instanceof Object).toEqual(true);
            expect((graph.getEdge("2", "3")) instanceof Object).toEqual(true);
            expect((graph.getEdge("3", "2")) instanceof Object).toEqual(true);
            expect((graph.getEdge("5", "1")) instanceof Object).toEqual(true);
            expect((graph.getEdge("5", "2")) instanceof Object).toEqual(true);
            expect((graph.getEdge("6", "3")) instanceof Object).toEqual(true);
            expect((graph.getEdge("6", "6")) instanceof Object).toEqual(true);
        });
    });

    describe("Remove edge", function() {
        var graph = new Graph();

        it("should return undefined if either node's not found", function() {
            expect(graph.removeEdge(1, 2)).toEqual(undefined);
            expect(graph.removeEdge(void 0, void 0)).toEqual(undefined);
        });

        it("should have kept the edge count at 0", function() {
            expect(graph.edgeSize).toEqual(0);
        });

        it("should return undefined if the edge doesn't exist", function() {
            addNodesTo(graph, true);

            /*
            1 <- 2 <-> 3
            |^   ^     ^
            v \  |     |
            4   \5     6 <->
             */
            expect(graph.removeEdge("1", "4").weight).toEqual(9);
            expect(graph.removeEdge("2", "1").weight).toEqual(9);
            expect(graph.removeEdge("2", "3").weight).toEqual(9);
            expect(graph.removeEdge("3", "2").weight).toEqual(9);
            expect(graph.removeEdge("5", "1").weight).toEqual(9);
            expect(graph.removeEdge("5", "2").weight).toEqual(9);
            expect(graph.removeEdge("6", "3").weight).toEqual(9);
        });

        it("should have kept track of the edge count", function() {
            expect(graph.edgeSize).toEqual(1);
        });

        it("should remove a self-directing correctly", function() {
            expect(graph.removeEdge("6", "6").weight).toEqual(9);
            expect(graph.edgeSize).toEqual(0);
        });

        it("should leave an empty graph after removing all the edges", function() {
            expect(graph.removeEdge("1", "4")).toEqual(undefined);
            expect(graph.removeEdge("2", "1")).toEqual(undefined);
            expect(graph.removeEdge("2", "3")).toEqual(undefined);
            expect(graph.removeEdge("3", "2")).toEqual(undefined);
            expect(graph.removeEdge("5", "1")).toEqual(undefined);
            expect(graph.removeEdge("5", "2")).toEqual(undefined);
            expect(graph.removeEdge("6", "3")).toEqual(undefined);
            expect(graph.removeEdge("6", "6")).toEqual(undefined);
        });
    });

    describe("Get all in edges", function() {
        var graph = new Graph(),
            graph2 = new Graph();

        it("should return empty array for a non-existant node", function() {
            expect(graph.getOutEdgesOf("6")).toEqual([]);
            expect(graph.getOutEdgesOf(void 0)).toEqual([]);
        });

        it("should return empty array for no edges", function() {
            addNodesTo(graph);
            expect(graph.getInEdgesOf("1")).toEqual([]);
            expect(graph.getInEdgesOf("2")).toEqual([]);
            expect(graph.getInEdgesOf("6")).toEqual([]);
        });

        it("should return the in edges", function() {
            addNodesTo(graph2, true);

            /*
            1 <- 2 <-> 3
            |^   ^     ^
            v \  |     |
            4   \5     6 <->
             */
            expect(graph2.getInEdgesOf("1").length).toEqual(2);
            expect(graph2.getInEdgesOf("1")).toContain(graph2.getEdge("2", "1"));
            expect(graph2.getInEdgesOf("1")).toContain(graph2.getEdge("5", "1"));
            expect(graph2.getInEdgesOf("2").length).toEqual(2);
            expect(graph2.getInEdgesOf("2")).toContain(graph2.getEdge("3", "2"));
            expect(graph2.getInEdgesOf("2")).toContain(graph2.getEdge("5", "2"));
            expect(graph2.getInEdgesOf("3").length).toEqual(2);
            expect(graph2.getInEdgesOf("3")).toContain(graph2.getEdge("2", "3"));
            expect(graph2.getInEdgesOf("3")).toContain(graph2.getEdge("6", "3"));
            expect(graph2.getInEdgesOf("4").length).toEqual(1);
            expect(graph2.getInEdgesOf("4")).toContain(graph2.getEdge("1", "4"));
            expect(graph2.getInEdgesOf("5")).toEqual([]);
            expect(graph2.getInEdgesOf("6").length).toEqual(1);
            expect(graph2.getInEdgesOf("6")).toContain(graph2.getEdge("6", "6"));
        });
    });

    describe("Get all out edges", function() {
        var graph = new Graph(),
            graph2 = new Graph();

        it("should return empty array for a non-existant node", function() {
            expect(graph.getOutEdgesOf("6")).toEqual([]);
            expect(graph.getOutEdgesOf(void 0)).toEqual([]);
        });

        it("should return empty array for no edges", function() {
            addNodesTo(graph);
            expect(graph.getOutEdgesOf("1")).toEqual([]);
            expect(graph.getOutEdgesOf("2")).toEqual([]);
        });

        it("should return the in edges", function() {
            addNodesTo(graph2, true);

            /*
            1 <- 2 <-> 3
            |^   ^     ^
            v \  |     |
            4   \5     6 <->
             */
            expect(graph2.getOutEdgesOf("1").length).toEqual(1);
            expect(graph2.getOutEdgesOf("1")).toContain(graph2.getEdge("1", "4"));
            expect(graph2.getOutEdgesOf("2").length).toEqual(2);
            expect(graph2.getOutEdgesOf("2")).toContain(graph2.getEdge("2", "1"));
            expect(graph2.getOutEdgesOf("2")).toContain(graph2.getEdge("2", "3"));
            expect(graph2.getOutEdgesOf("3").length).toEqual(1);
            expect(graph2.getOutEdgesOf("3")).toContain(graph2.getEdge("3", "2"));
            expect(graph2.getOutEdgesOf("4")).toEqual([]);
            expect(graph2.getOutEdgesOf("5").length).toEqual(2);
            expect(graph2.getOutEdgesOf("5")).toContain(graph2.getEdge("5", "1"));
            expect(graph2.getOutEdgesOf("5")).toContain(graph2.getEdge("5", "2"));
            expect(graph2.getOutEdgesOf("6").length).toEqual(2);
            expect(graph2.getOutEdgesOf("6")).toContain(graph2.getEdge("6", "3"));
            expect(graph2.getOutEdgesOf("6")).toContain(graph2.getEdge("6", "6"));
        });
    });

    describe("Get all edges", function() {
        var graph = new Graph(),
            graph2 = new Graph();

        it("should return an empty array if node doesn't exist", function() {
            expect(graph.getAllEdgesOf(1)).toEqual([]);
            expect(graph.getAllEdgesOf(void 0)).toEqual([]);
        });

        it("should return an empty array if the node doesn't have edges", function() {
            addNodesTo(graph);
            expect(graph.getAllEdgesOf("1")).toEqual([]);
            expect(graph.getAllEdgesOf("2")).toEqual([]);
            expect(graph.getAllEdgesOf("6")).toEqual([]);
        });

        it("should return an array of edges", function() {
            addNodesTo(graph2, true);

            /*
            1 <- 2 <-> 3
            |^   ^     ^
            v \  |     |
            4   \5     6 <->
             */
            expect(graph2.getAllEdgesOf("1").length).toEqual(3);
            expect(graph2.getAllEdgesOf("1")).toContain(graph2.getEdge("1", "4"));
            expect(graph2.getAllEdgesOf("1")).toContain(graph2.getEdge("2", "1"));
            expect(graph2.getAllEdgesOf("1")).toContain(graph2.getEdge("5", "1"));
            expect(graph2.getAllEdgesOf("2").length).toEqual(4);
            expect(graph2.getAllEdgesOf("2")).toContain(graph2.getEdge("2", "1"));
            expect(graph2.getAllEdgesOf("2")).toContain(graph2.getEdge("2", "3"));
            expect(graph2.getAllEdgesOf("2")).toContain(graph2.getEdge("3", "2"));
            expect(graph2.getAllEdgesOf("2")).toContain(graph2.getEdge("5", "2"));
            expect(graph2.getAllEdgesOf("3").length).toEqual(3);
            expect(graph2.getAllEdgesOf("3")).toContain(graph2.getEdge("3", "2"));
            expect(graph2.getAllEdgesOf("3")).toContain(graph2.getEdge("2", "3"));
            expect(graph2.getAllEdgesOf("3")).toContain(graph2.getEdge("6", "3"));
            expect(graph2.getAllEdgesOf("4").length).toEqual(1);
            expect(graph2.getAllEdgesOf("4")).toContain(graph2.getEdge("1", "4"));
            expect(graph2.getAllEdgesOf("5").length).toEqual(2);
            expect(graph2.getAllEdgesOf("5")).toContain(graph2.getEdge("5", "1"));
            expect(graph2.getAllEdgesOf("5")).toContain(graph2.getEdge("5", "2"));
        });

        it("should not duplicate a self-pointing edge", function() {
            expect(graph2.getAllEdgesOf("6").length).toEqual(2);
            expect(graph2.getAllEdgesOf("6")).toContain(graph2.getEdge("6", "3"));
            expect(graph2.getAllEdgesOf("6")).toContain(graph2.getEdge("6", "6"));
        });
    });

    describe("Traverse through each node", function() {
        var graph = new Graph();

        it("shouldn't call the callback for an empty graph", function() {
            var callback = jasmine.createSpy();

            graph.forEachNode(callback);
            expect(callback).not.toHaveBeenCalled();
            //sinon.assert.notCalled(callback);
        });

        it("should reach each node once", function() {
            var callback = jasmine.createSpy();
            addNodesTo(graph);
            graph.forEachNode(callback);
            expect(callback.calls.count()).toEqual(6);
        });

        it("should pass nodeObject and nodeId to the callback", function() {
            var callback = jasmine.createSpy();
            graph.forEachNode(callback);
            expect(callback.calls.mostRecent().args.length).toEqual(2);
            expect(callback.calls.mostRecent().args[0] instanceof Object).toEqual(true);
            expect(callback.calls.mostRecent().args[1]).toEqual("6");
        });
    });

    describe("Traverse through each edge", function() {
        var graph = new Graph();

        it("shouldn't call the callback for an empty graph", function() {
            var callback = jasmine.createSpy();
            graph.forEachEdge(callback);
            expect(callback).not.toHaveBeenCalled();
        });

        it("should reach each edge once", function() {
            var callback = jasmine.createSpy();
            addNodesTo(graph, true);
            graph.forEachEdge(callback);
            expect(callback.calls.count()).toEqual(8);
        });

        it("should reach the isolated node with an edge toward itself", function() {
            var callback = jasmine.createSpy();
            graph.addNode("99");
            graph.addEdge("99", "99", 999);
            graph.forEachEdge(callback);
            expect(callback.calls.count()).toEqual(9);
        });
    });
});

