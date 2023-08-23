{
  data.products.map((item) => <ProductCard key={item.id} product={item} />);
}
    {
      skeletonArray.map((item, index) => (
        <Col key={index}>
          <div className="product-image">
            <Skeleton height={350} />
          </div>
          <Row>
            <Skeleton />
          </Row>
        </Col>
      ));
    }