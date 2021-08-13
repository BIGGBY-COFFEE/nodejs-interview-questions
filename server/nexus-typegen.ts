/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./api/context"


declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  DateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedDateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  OrderCreateInput: { // input type
    created?: NexusGenScalars['DateTime'] | null; // DateTime
    email: string; // String!
    id?: string | null; // String
    items?: NexusGenInputs['OrderItemCreateNestedManyWithoutOrderInput'] | null; // OrderItemCreateNestedManyWithoutOrderInput
    subtotal: number; // Int!
    tax: number; // Int!
    total: number; // Int!
  }
  OrderCreateNestedOneWithoutItemsInput: { // input type
    connect?: NexusGenInputs['OrderWhereUniqueInput'] | null; // OrderWhereUniqueInput
    connectOrCreate?: NexusGenInputs['OrderCreateOrConnectWithoutItemsInput'] | null; // OrderCreateOrConnectWithoutItemsInput
    create?: NexusGenInputs['OrderCreateWithoutItemsInput'] | null; // OrderCreateWithoutItemsInput
  }
  OrderCreateOrConnectWithoutItemsInput: { // input type
    create: NexusGenInputs['OrderCreateWithoutItemsInput']; // OrderCreateWithoutItemsInput!
    where: NexusGenInputs['OrderWhereUniqueInput']; // OrderWhereUniqueInput!
  }
  OrderCreateWithoutItemsInput: { // input type
    created?: NexusGenScalars['DateTime'] | null; // DateTime
    email: string; // String!
    id?: string | null; // String
    subtotal: number; // Int!
    tax: number; // Int!
    total: number; // Int!
  }
  OrderItemCreateNestedManyWithoutOrderInput: { // input type
    connect?: NexusGenInputs['OrderItemWhereUniqueInput'][] | null; // [OrderItemWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['OrderItemCreateOrConnectWithoutOrderInput'][] | null; // [OrderItemCreateOrConnectWithoutOrderInput!]
    create?: NexusGenInputs['OrderItemCreateWithoutOrderInput'][] | null; // [OrderItemCreateWithoutOrderInput!]
  }
  OrderItemCreateNestedManyWithoutProductInput: { // input type
    connect?: NexusGenInputs['OrderItemWhereUniqueInput'][] | null; // [OrderItemWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['OrderItemCreateOrConnectWithoutProductInput'][] | null; // [OrderItemCreateOrConnectWithoutProductInput!]
    create?: NexusGenInputs['OrderItemCreateWithoutProductInput'][] | null; // [OrderItemCreateWithoutProductInput!]
  }
  OrderItemCreateOrConnectWithoutOrderInput: { // input type
    create: NexusGenInputs['OrderItemCreateWithoutOrderInput']; // OrderItemCreateWithoutOrderInput!
    where: NexusGenInputs['OrderItemWhereUniqueInput']; // OrderItemWhereUniqueInput!
  }
  OrderItemCreateOrConnectWithoutProductInput: { // input type
    create: NexusGenInputs['OrderItemCreateWithoutProductInput']; // OrderItemCreateWithoutProductInput!
    where: NexusGenInputs['OrderItemWhereUniqueInput']; // OrderItemWhereUniqueInput!
  }
  OrderItemCreateWithoutOrderInput: { // input type
    id?: string | null; // String
    price: number; // Int!
    product: NexusGenInputs['ProductCreateNestedOneWithoutOrderItemsInput']; // ProductCreateNestedOneWithoutOrderItemsInput!
  }
  OrderItemCreateWithoutProductInput: { // input type
    id?: string | null; // String
    order: NexusGenInputs['OrderCreateNestedOneWithoutItemsInput']; // OrderCreateNestedOneWithoutItemsInput!
    price: number; // Int!
  }
  OrderItemListRelationFilter: { // input type
    every?: NexusGenInputs['OrderItemWhereInput'] | null; // OrderItemWhereInput
    none?: NexusGenInputs['OrderItemWhereInput'] | null; // OrderItemWhereInput
    some?: NexusGenInputs['OrderItemWhereInput'] | null; // OrderItemWhereInput
  }
  OrderItemWhereInput: { // input type
    AND?: NexusGenInputs['OrderItemWhereInput'][] | null; // [OrderItemWhereInput!]
    NOT?: NexusGenInputs['OrderItemWhereInput'][] | null; // [OrderItemWhereInput!]
    OR?: NexusGenInputs['OrderItemWhereInput'][] | null; // [OrderItemWhereInput!]
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    order?: NexusGenInputs['OrderWhereInput'] | null; // OrderWhereInput
    orderId?: NexusGenInputs['StringFilter'] | null; // StringFilter
    price?: NexusGenInputs['IntFilter'] | null; // IntFilter
    product?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    productId?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  OrderItemWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  OrderWhereInput: { // input type
    AND?: NexusGenInputs['OrderWhereInput'][] | null; // [OrderWhereInput!]
    NOT?: NexusGenInputs['OrderWhereInput'][] | null; // [OrderWhereInput!]
    OR?: NexusGenInputs['OrderWhereInput'][] | null; // [OrderWhereInput!]
    created?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    email?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    items?: NexusGenInputs['OrderItemListRelationFilter'] | null; // OrderItemListRelationFilter
    subtotal?: NexusGenInputs['IntFilter'] | null; // IntFilter
    tax?: NexusGenInputs['IntFilter'] | null; // IntFilter
    total?: NexusGenInputs['IntFilter'] | null; // IntFilter
  }
  OrderWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  ProductCreateInput: { // input type
    id?: string | null; // String
    image: string; // String!
    name: string; // String!
    orderItems?: NexusGenInputs['OrderItemCreateNestedManyWithoutProductInput'] | null; // OrderItemCreateNestedManyWithoutProductInput
    price: number; // Int!
  }
  ProductCreateNestedOneWithoutOrderItemsInput: { // input type
    connect?: NexusGenInputs['ProductWhereUniqueInput'] | null; // ProductWhereUniqueInput
    connectOrCreate?: NexusGenInputs['ProductCreateOrConnectWithoutOrderItemsInput'] | null; // ProductCreateOrConnectWithoutOrderItemsInput
    create?: NexusGenInputs['ProductCreateWithoutOrderItemsInput'] | null; // ProductCreateWithoutOrderItemsInput
  }
  ProductCreateOrConnectWithoutOrderItemsInput: { // input type
    create: NexusGenInputs['ProductCreateWithoutOrderItemsInput']; // ProductCreateWithoutOrderItemsInput!
    where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
  }
  ProductCreateWithoutOrderItemsInput: { // input type
    id?: string | null; // String
    image: string; // String!
    name: string; // String!
    price: number; // Int!
  }
  ProductWhereInput: { // input type
    AND?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    NOT?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    OR?: NexusGenInputs['ProductWhereInput'][] | null; // [ProductWhereInput!]
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    image?: NexusGenInputs['StringFilter'] | null; // StringFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    orderItems?: NexusGenInputs['OrderItemListRelationFilter'] | null; // OrderItemListRelationFilter
    price?: NexusGenInputs['IntFilter'] | null; // IntFilter
  }
  ProductWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Mutation: {};
  Order: { // root type
    created: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: string; // String!
    subtotal: number; // Int!
    tax: number; // Int!
    total: number; // Int!
  }
  OrderItem: { // root type
    id: string; // String!
    price: number; // Int!
  }
  Product: { // root type
    id: string; // String!
    image: string; // String!
    name: string; // String!
    price: number; // Int!
  }
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createOneOrder: NexusGenRootTypes['Order']; // Order!
    createOneProduct: NexusGenRootTypes['Product']; // Product!
    deleteOneProduct: NexusGenRootTypes['Product'] | null; // Product
  }
  Order: { // field return type
    created: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: string; // String!
    items: NexusGenRootTypes['OrderItem'][]; // [OrderItem!]!
    subtotal: number; // Int!
    tax: number; // Int!
    total: number; // Int!
  }
  OrderItem: { // field return type
    id: string; // String!
    order: NexusGenRootTypes['Order']; // Order!
    price: number; // Int!
    product: NexusGenRootTypes['Product']; // Product!
  }
  Product: { // field return type
    id: string; // String!
    image: string; // String!
    name: string; // String!
    price: number; // Int!
  }
  Query: { // field return type
    order: NexusGenRootTypes['Order'] | null; // Order
    orders: NexusGenRootTypes['Order'][]; // [Order!]!
    product: NexusGenRootTypes['Product'] | null; // Product
    products: NexusGenRootTypes['Product'][]; // [Product!]!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createOneOrder: 'Order'
    createOneProduct: 'Product'
    deleteOneProduct: 'Product'
  }
  Order: { // field return type name
    created: 'DateTime'
    email: 'String'
    id: 'String'
    items: 'OrderItem'
    subtotal: 'Int'
    tax: 'Int'
    total: 'Int'
  }
  OrderItem: { // field return type name
    id: 'String'
    order: 'Order'
    price: 'Int'
    product: 'Product'
  }
  Product: { // field return type name
    id: 'String'
    image: 'String'
    name: 'String'
    price: 'Int'
  }
  Query: { // field return type name
    order: 'Order'
    orders: 'Order'
    product: 'Product'
    products: 'Product'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneOrder: { // args
      data: NexusGenInputs['OrderCreateInput']; // OrderCreateInput!
    }
    createOneProduct: { // args
      data: NexusGenInputs['ProductCreateInput']; // ProductCreateInput!
    }
    deleteOneProduct: { // args
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
  }
  Order: {
    items: { // args
      after?: NexusGenInputs['OrderItemWhereUniqueInput'] | null; // OrderItemWhereUniqueInput
      before?: NexusGenInputs['OrderItemWhereUniqueInput'] | null; // OrderItemWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Query: {
    order: { // args
      where: NexusGenInputs['OrderWhereUniqueInput']; // OrderWhereUniqueInput!
    }
    orders: { // args
      after?: NexusGenInputs['OrderWhereUniqueInput'] | null; // OrderWhereUniqueInput
      before?: NexusGenInputs['OrderWhereUniqueInput'] | null; // OrderWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['OrderWhereInput'] | null; // OrderWhereInput
    }
    product: { // args
      where: NexusGenInputs['ProductWhereUniqueInput']; // ProductWhereUniqueInput!
    }
    products: { // args
      after?: NexusGenInputs['ProductWhereUniqueInput'] | null; // ProductWhereUniqueInput
      before?: NexusGenInputs['ProductWhereUniqueInput'] | null; // ProductWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      where?: NexusGenInputs['ProductWhereInput'] | null; // ProductWhereInput
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}