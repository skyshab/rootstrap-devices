<?php
/**
 * Rootstrap class.
 *
 * This class handles the Rootstrap config data and sets up
 * the individual modules that make up Rootstrap.
 *
 * @package   Rootstrap
 * @author    Sky Shabatura
 * @copyright Copyright (c) 2019, Sky Shabatura
 * @link      https://github.com/skyshab/rootstrap
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

namespace Rootstrap\Devices;

use Hybrid\Contracts\Bootable;
use function Rootstrap\vendor_path;

/**
 * Creates a new Rootstrap object.
 *
 * @since  1.0.0
 * @access public
 */
class RootstrapDevices extends Bootable {

    /**
     * Store instance
     */
    private static $instance = null;

    /**
     * Stores Devices object.
     *
     * @since 1.0.0
     * @var array
     */
    private $devices;

    /**
     * Stores resources path.
     *
     * @since 1.0.0
     * @var string
     */
    private $resources_path;

    /**
     * Get instance.
     *
     * Instantiate new instance if one has not already been created.
     *
     * @since 1.0.0
     * @return object
     */
    public static function instance(){
        if(self::$instance == null) {
            self::$instance = new RootstrapDevices();
        }
        return self::$instance;
    }

    /**
     * Load resources.
     *
     * @since 1.0.0
     * @return object
     */
    public function boot() {
        // Store resources path
        $this->resources_path = vendor_path() . '/rootstrap-devices/dist';
        // Initiate Core Modules
        add_action( 'rootstrap/loaded',                     [ $this, 'init' ] );
        // Set Customizer Devices
        add_filter( 'customize_previewable_devices',        [ $this, 'customize_previewable_devices' ] );
        // Add Customizer Screen Styles
        add_action( 'customize_controls_print_styles',      [ $this, 'customize_controls_print_styles' ] );
        // Enqueue controls scripts
        add_action( 'customize_controls_enqueue_scripts',   [ $this, 'customize_resources' ] );
    }

    /**
     * Initiate Core Modules.
     *
     * @since 1.1.0
     * @return object
     */
    public function init() {
        // Create devices object
        $devices = new Devices;
        // Define mobile device
        $devices->add( 'mobile', [
            'min' => '',
            'max' => '767px',
            'icon' => '"\\f470"',
            'preview_width' => '375px',
            'preview_height' => '677px'
        ]);
        // Define tablet device
        $devices->add( 'tablet', [
            'min' => '768px',
            'max' => '1024px',
            'icon' => '"\\f471"',
            'preview_width' => '768px',
            'preview_height' => '100%'
        ]);
        // Define desktop device
        $devices->add( 'desktop', [
            'min' => '1025px',
            'max' => '',
            'icon' => '"\\f472"',
            'preview_width' => '100%',
            'preview_height' => '100%'
        ]);
        // Action hook for plugins and child themes to add or remove devices
        do_action( 'rootstrap/register/devices', $devices );
        // Store devices object
        $this->devices = $devices;
    }

    /**
     * Enqueue scripts and styles.
     *
     *  If filters are applied defining file locations, load scripts and styles.
     *
     * @since 1.0.0
     */
    public function customize_resources() {
        wp_enqueue_script( 'rootstrap-customize-controls', $this->resources_path . '/js/customize-controls.js', ['customize-controls'], null, true );
        wp_localize_script( 'rootstrap-customize-controls', 'rootstrapData', $this->js_data() );
        wp_enqueue_style( 'rootstrap-customize-controls', $this->resources_path . '/css/customize-controls.css' );
    }

    /**
     * Get data to make available to JS.
     *
     * @since  1.0.0
     * @access public
     * @return array  returns array of js data
     */
    public function js_data() {
        // Filter to modify the devices data
        return apply_filters( 'rootstrap/resources/js-data', ['devices' => get_devices_data()] );
    }

    /**
     * Add custom devices to customizer.
     * These are output in the order they occur in the array,
     * and there is no width associated with the defaults here.
     * Unfortunately, this means this is an all or nothing thing.
     *
     * @since 1.0.0
     * @param array $devices - array of registered devices
     * @return array
     */
    public function customize_previewable_devices( $defaults ) {
        // Get all of the devices
        $devices = get_devices();
        // If no custom devices, use wp defaults
        if( !$devices ) return $defaults;
        // Create empty array to store devices
        $device_array = [];
        // Generate a label for each device button
        foreach ($devices as $name => $device) {
            // this should have a translation
            $device_array[$name]['label'] =  esc_html( sprintf('Enter %s preview mode', $name ) );
            // If no max, assume this is 'desktop' or equivalent, set as default
            if( !$device->max() ) {
                $device_array[$name]['default'] = true;
            }
        }
        // Return our custom device array
        return $device_array;
    }

    /**
     * Add custom screen size styles to customizer head
     *
     * @since 1.0.0
     * @return string
     */
    public function customize_controls_print_styles() {
        $styles = "<style>";
        foreach ( get_devices() as $name => $device ) {
            // add icon to preview button
            $styles .= sprintf( 'button.preview-%s:before{content: %s;}', $name, $device->icon() );
            // set customize preview screen max width
            $styles .= sprintf( '.preview-%s #customize-preview{width: %s!important; height: %s!important;}', $name, $device->preview_width(), $device->preview_height() );
        }
        $styles .= "</style>";
        echo $styles;
    }
    /**
     * Get Devices Object.
     *
     * @since 1.0.0
     * @return void
     */
    public function getDevices() {
        return $this->devices;
    }
}
