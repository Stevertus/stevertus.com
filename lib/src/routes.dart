import 'package:angular_router/angular_router.dart';
import './pages/contact/contact.template.dart' as ct;
import './pages/landing/landing.template.dart' as landing;
import './pages/article/article.template.dart' as art;
import './pages/articles/articles.template.dart' as arts;
import './pages/projects/projects.template.dart' as proj;
import './pages/tekpack/tekpack.template.dart' deferred as tek;
import './pages/tools/crafting/crafting.template.dart' deferred as craft;
import './pages/tools/gui/gui.template.dart' deferred as gui;
import './pages/tools/blocks/blocks.template.dart' deferred as blocks;
import './pages/not_found.template.dart' as not_found_template;

final redirects = [
  redirectTo('worldedit/package', '/article/worldedit-package'),
  redirectTo('worldedit/cyl', '/article/worldedit-cyl'),
  redirectTo('worldedit/qb', '/article/worldedit-qb'),
  redirectTo('worldedit/li', '/article/worldedit-li'),
  redirectTo('worldedit/br', '/article/worldedit-br'),
  redirectTo('worldedit/tb', '/article/worldedit-tb'),
  redirectTo('worldedit/sel', '/article/worldedit-sel'),
  redirectTo('worldedit/cp', '/article/worldedit-cp'),
  redirectTo('tools/guiguide', '/article/guiguide'),
  redirectTo('tools/mccam', '/article/cam'),
  redirectTo('tekPack', '/tekpack'),
  redirectTo('fard', '/contact'),
];

RouteDefinition redirectTo(String path, String redirect) =>
    RouteDefinition.redirect(path: path, redirectTo: redirect);

class RoutePaths {
  static final home = RoutePath(path: '');
  static final contact = RoutePath(path: 'contact');
  static final articles = RoutePath(path: 'articles');
  static final projects = RoutePath(path: 'projects');
  static final article = RoutePath(path: 'article/:id');
  static final tekpack = RoutePath(path: 'tekpack');
  static final craftingTool = RoutePath(path: 'tools/crafting');
  static final guiTool = RoutePath(path: 'tools/gui');
  static final blocksTool = RoutePath(path: 'tools/blocks');
}

class Routes {
  static final contact = RouteDefinition(
    routePath: RoutePaths.contact,
    component: ct.ContactPageNgFactory,
  );
  static final home = RouteDefinition(
    routePath: RoutePaths.home,
    component: landing.LandingPageNgFactory,
    useAsDefault: true,
  );
  static final article = RouteDefinition(
    routePath: RoutePaths.article,
    component: art.ArticlePageNgFactory,
  );
  static final articles = RouteDefinition(
    routePath: RoutePaths.articles,
    component: arts.ArticlesPageNgFactory,
  );
  static final projects = RouteDefinition(
    routePath: RoutePaths.projects,
    component: proj.ProjectsPageNgFactory,
  );
  static final tekpack = RouteDefinition.defer(
    routePath: RoutePaths.tekpack,
    loader: () async {
      await tek.loadLibrary();
      return tek.TekPackPageNgFactory;
    },
  );
  static final craftingTool = RouteDefinition.defer(
    routePath: RoutePaths.craftingTool,
    loader: () async {
      await craft.loadLibrary();
      return craft.CraftingToolPageNgFactory;
    },
  );
  static final guiTool = RouteDefinition.defer(
    routePath: RoutePaths.guiTool,
    loader: () async {
      await gui.loadLibrary();
      return gui.GuiToolPageNgFactory;
    },
  );
  static final blocksTool = RouteDefinition.defer(
    routePath: RoutePaths.blocksTool,
    loader: () async {
      await blocks.loadLibrary();
      return blocks.BlocksToolPageNgFactory;
    },
  );

  static final all = <RouteDefinition>[
    contact,
    home,
    article,
    articles,
    projects,
    tekpack,
    craftingTool,
    guiTool,
    blocksTool,
    ...redirects,
    RouteDefinition(
      path: '.+',
      component: not_found_template.NotFoundComponentNgFactory,
    ),
  ];
}
