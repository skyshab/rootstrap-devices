<?php
/**
 * Rootstrap Devices
 *
 * This class handles devices used in the customizer preview
 * and responsive breakpoints for theme styles.
 *
 * @package   Rootstrap/Devices
 * @author    Sky Shabatura
 * @copyright Copyright (c) 2019, Sky Shabatura
 * @link      https://github.com/skyshab/rootstrap-devices
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
class Manager implements Bootable {

    /**
     * Stores Devices object.
     *
     * @since 1.0.0
     * @var array
     */
    private $devices;

    /**
     * Stores default devices array
     *
     * @since 1.0.0
     * @var array
     */
    private $defaults = [
        'mobile' => [
            'min' => '',
            'max' => '767px',
            'icon' => '"\\f470"',
            'preview_width' => '375px',
            'preview_height' => '677px'
        ],
        'tablet' => [
            'min' => '768px',
            'max' => '1024px',
            'icon' => '"\\f471"',
            'preview_width' => '768px',
            'preview_height' => '100%'
        ],
        'desktop' => [
            'min' => '1025px',
            'max' => '',
            'icon' => '"\\f472"',
            'preview_width' => '100%',
            'preview_height' => '100%'
        ]
    ];

    /**
     * Initiate Devices Manager.
     *
     * @since 1.0.0
     * @param object $devices - a Collection of Devices
     * @param array  $config - an array of devices data
     * @return void
     */
    public function __construct( Devices $devices, array $config = [] ) {

        // If no config passed in, use defaults
        if( empty($config) ) {
            $config = $this->defaults;
        }

        // Add each device from config
        foreach($config as $device => $settings) {
            $devices->add($device, $settings);
        }

        // Store Devices Collection
        $this->devices = $devices;
    }

    /**
     * Boot class functionality.
     *
     * @since 1.0.0
     * @return object
     */
    public function boot() {

        // Set Customizer Devices
        add_filter( 'customize_previewable_devices',        [ $this, 'previewableDevices' ] );

        // Add Customizer Screen Styles
        add_action( 'customize_controls_print_styles',      [ $this, 'controlStyles' ] );

        // Enqueue controls scripts
        add_action( 'customize_controls_enqueue_scripts',   [ $this, 'customizeResources' ] );
    }


    /**
     * Enqueue scripts and styles.
     *
     *  If filters are applied defining file locations, load scripts and styles.
     *
     * @since 1.0.0
     */
    public function customizeResources() {

        // Define resources path
        $resources_path = vendor_path() . '/skyshab/rootstrap-devices/dist';

        // Enqueue module script
        wp_enqueue_script( 'rootstrap-customize-controls', $resources_path . '/js/customize-controls.js', ['customize-controls'], null, true );

        // Make devices data available for scripts
        wp_localize_script( 'rootstrap-customize-controls', 'rootstrapDataDevices', $this->getDevicesData() );

        // Enqueue module styles
        wp_enqueue_style( 'rootstrap-customize-controls', $resources_path . '/css/customize-controls.css' );
    }

    /**
     * Get Devices Collection.
     *
     * @since 1.0.0
     * @return void
     */
    public function collection() {
        return $this->devices;
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
    public function previewableDevices( $defaults ) {

        // Get Devices array
        $devices = $this->collection()->all();

        // If no custom devices, use wp defaults
        if( !$devices ) return $defaults;

        // Create empty array to store devices
        $deviceArray = [];

        // Generate a label for each device button
        foreach ($devices as $name => $device) {
            // this should have a translation
            $deviceArray[$name]['label'] =  esc_html( sprintf('Enter %s preview mode', $name ) );

            // If no max, assume this is 'desktop' or equivalent, set as default
            if( !$device->max() ) {
                $deviceArray[$name]['default'] = true;
            }
        }

        // Return our custom device array
        return $deviceArray;
    }

    /**
     * Add custom screen size styles to customizer head
     *
     * @since 1.0.0
     * @return string
     */
    public function controlStyles() {
        $styles = "<style>";
        foreach ( $this->collection()->all() as $name => $device ) {
            // add icon to preview button
            $styles .= sprintf( 'button.preview-%s:before{content: %s;}', $name, $device->icon() );
            // set customize preview screen max width
            $styles .= sprintf( '.preview-%s #customize-preview{width: %s!important; height: %s!important;}', $name, $device->preview_width(), $device->preview_height() );
        }
        $styles .= "</style>";
        echo $styles;
    }

    /**
     * Get Devices Data
     *
     * @since  1.0.0
     * @access public
     * @return array
     */
    function getDevicesData() {
        $devicesArray = [];
        foreach( $this->collection()->all() as $name => $device ) {
            $devicesArray[$name]['min'] = $device->min();
            $devicesArray[$name]['max'] = $device->max();
        }
        return $devicesArray;
    }
}
