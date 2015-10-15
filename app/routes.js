import App from './App';
import HomePage from './home/HomePage';
import NavigationMenu from './navigation/NavigationMenu';
import LoginPage from './login/LoginPage';
import TickTradePage from './tick-trade/TickTradePage';
import TickTradeCard from './tick-trade/TickTradeCard';
import TickTradeInCard from './tick-trade/TickTradeInCard';
import TickTradeSettingsCard from './tick-trade/TickTradeSettingsCard';
import { PortfolioPage, PortfolioMobile, PortfolioPanel } from './portfolio';
import { StatementPage, StatementMobile } from './statement';
import WorkspacePage from './workspace/WorkspacePage';
import SignupPage from './signup/SignupPage';
import BalancesPage from './balances/BalancesPage';
import UpgradePage from './upgrade/UpgradePage';
import WatchlistCard from './watchlist/WatchlistCard';
import OfferingsCard from './offerings/OfferingsCard';
import ActiveSymbolsCard from './active-symbols/ActiveSymbolsCard';
import AssetSelectorPage from './asset-selector/AssetSelectorPage';
import AssetIndexPage from './asset-index/AssetIndexPage';
import AssetIndexTable from './asset-index/AssetIndexTable';
import RiseFallTablePage from './rise-fall-table/RiseFallTablePage';
import TradingTimesPage from './trading-times/TradingTimesPage';
import TradingTimesTable from './trading-times/TradingTimesTable';
import PricingTablePage from './pricing-table/PricingTablePage';
import DailyPricesPage from './daily-prices/DailyPricesPage';
import IntradayPricesPane from './intraday-prices/IntradayPricesPane';
import ProfitTablePage from './profit-table/ProfitTablePage';
import TradePage from './trade/TradePage';
import SettingsPage from './settings/SettingsPage';
import SettingsPersonalDetails from './settings/SettingsPersonalDetails';
import SettingsSecurity from './settings/SettingsSecurity';
import SettingsSelfExclusion from './settings/SettingsSelfExclusion';
import SettingsLimits from './settings/SettingsLimits';

export default {
    component: App,
    childRoutes: [
        { path: '/', component: HomePage },
        { path: 'nav', component: NavigationMenu },
        { path: 'login', component: LoginPage },
        { path: 'tick-trade', indexRoute: { component: TickTradeCard }, component: TickTradePage, childRoutes: [
            { path: 'in', component: TickTradeInCard },
            { path: 'settings', component: TickTradeSettingsCard },
        ]},
        { path: 'portfolio', component: PortfolioPage },
        { path: 'portfolio-mobile', component: PortfolioMobile },
        { path: 'portfolio-panel', component: PortfolioPanel },
        { path: 'statement', component: StatementPage },
        { path: 'statement-mobile', component: StatementMobile },
        { path: 'workspace', component: WorkspacePage },
        { path: 'balances', component: BalancesPage },
        { path: 'signup', component: SignupPage },
        { path: 'upgrade', component: UpgradePage },
        { path: 'trade', component: TradePage },
        { path: 'ticks', component: WatchlistCard },
        { path: 'offerings', component: OfferingsCard },
        { path: 'active-symbols', component: ActiveSymbolsCard },
        { path: 'asset-selector', component: AssetSelectorPage },
        { path: 'asset-selector/:market', component: AssetSelectorPage },
        { path: 'asset-index', component: AssetIndexPage, childRoutes: [
            { path: ':market', component: AssetIndexTable },
        ]},
        { path: 'trading-times', component: TradingTimesPage, childRoutes: [
            { path: ':market', component: TradingTimesTable },
        ]},
        { path: 'rise-fall-table', component: RiseFallTablePage },
        { path: 'pricing-table', component: PricingTablePage },
        { path: 'daily-prices', component: DailyPricesPage },
        { path: 'intraday-prices', component: IntradayPricesPane },
        { path: 'profit-table', component: ProfitTablePage },
        { path: 'settings', indexRoute: { component: SettingsPersonalDetails }, component: SettingsPage, childRoutes: [
            { path: 'security', component: SettingsSecurity },
            { path: 'exclusion', component: SettingsSelfExclusion },
            { path: 'limits', component: SettingsLimits },
        ]},
    ],
};
